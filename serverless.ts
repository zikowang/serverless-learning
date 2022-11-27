import type { AWS } from "@serverless/typescript";
import {
    createTodo,
    getTodo,
    getAllTodos,
    updateTodo,
    deleteTodo,
} from "@functions/todo";
import { sayHello, sayGoodbye } from "@functions/helloWorld";

const serverlessConfiguration: AWS = {
    service: "serverless-learning",
    frameworkVersion: "3",
    plugins: [
        "serverless-plugin-typescript",
        "serverless-dynamodb-local",
        "serverless-offline",
    ],
    provider: {
        name: "aws",
        runtime: "nodejs16.x",
        stage: "dev",
        region: "eu-central-1",
        apiGateway: {
            minimumCompressionSize: 1024,
            shouldStartNameWithService: true,
        },
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
            NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
        },
        iam: {
            role: {
                statements: [
                    {
                        Effect: "Allow",
                        Action: [
                            "dynamodb:DescribeTable",
                            "dynamodb:Query",
                            "dynamodb:Scan",
                            "dynamodb:GetItem",
                            "dynamodb:PutItem",
                            "dynamodb:UpdateItem",
                            "dynamodb:DeleteItem",
                        ],
                        Resource:
                            "arn:aws:dynamodb:eu-central-1:*:table/TodosTable",
                    },
                ],
            },
        },
    },
    // import the function via paths
    functions: {
        getAllTodos,
        createTodo,
        getTodo,
        updateTodo,
        deleteTodo,
        sayHello,
        sayGoodbye,
    },
    package: {
        patterns: [
            "!package-log.json",
            "!README.md",
            "!node_modules/**",
            "node_modules/uuid/**",
            "node_modules/json-schema-to-ts/**",
            "node_modules/@middy/**",
        ],
        individually: true,
    },
    custom: {
        esbuild: {
            bundle: true,
            minify: false,
            sourcemap: true,
            exclude: ["aws-sdk"],
            target: "node16",
            define: { "require.resolve": undefined },
            platform: "node",
            concurrency: 10,
        },
        dynamodb: {
            start: {
                port: 5001,
                migrate: true,
                dbPath: "${env:PWD}/.db/",
            },
            stages: "dev",
        },
    },
    resources: {
        Resources: {
            TodosTable: {
                Type: "AWS::DynamoDB::Table",
                Properties: {
                    TableName: "TodosTable",
                    AttributeDefinitions: [
                        {
                            AttributeName: "todosId",
                            AttributeType: "S",
                        },
                    ],
                    KeySchema: [
                        {
                            AttributeName: "todosId",
                            KeyType: "HASH",
                        },
                    ],
                    ProvisionedThroughput: {
                        ReadCapacityUnits: 1,
                        WriteCapacityUnits: 1,
                    },
                },
            },
        },
    },
};
module.exports = serverlessConfiguration;
