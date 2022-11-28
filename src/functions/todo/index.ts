import { handlerPath } from "@libs/handler-resolver";

export const getAllTodos = {
    handler: `${handlerPath(__dirname)}/getAllTodos.getAllTodos`,
    events: [
        {
            http: {
                method: "get",
                path: "todo/",
            },
        },
    ],
    package: {
        patterns: [
            "node_modules/uuid/**",
            "node_modules/json-schema-to-ts/**",
            "node_modules/@middy/**",
            `${handlerPath(__dirname)}/getAllTodos.*`,
        ],
    },
};

export const createTodo = {
    handler: `${handlerPath(__dirname)}/createTodo.createTodo`,
    events: [
        {
            http: {
                method: "post",
                path: "todo",
            },
        },
    ],
    package: {
        patterns: [
            "node_modules/uuid/**",
            "node_modules/json-schema-to-ts/**",
            "node_modules/@middy/**",
            `${handlerPath(__dirname)}/createTodo.*`,
        ],
    },
};

export const getTodo = {
    handler: `${handlerPath(__dirname)}/getTodo.getTodo`,
    events: [
        {
            http: {
                method: "get",
                path: "todo/{id}",
            },
        },
    ],
    package: {
        patterns: [
            "node_modules/uuid/**",
            "node_modules/json-schema-to-ts/**",
            "node_modules/@middy/**",
            `${handlerPath(__dirname)}/getTodo.*`,
        ],
    },
};

export const updateTodo = {
    handler: `${handlerPath(__dirname)}/updateTodo.updateTodo`,
    events: [
        {
            http: {
                method: "put",
                path: "todo/{id}",
            },
        },
    ],
    package: {
        patterns: [
            "node_modules/uuid/**",
            "node_modules/json-schema-to-ts/**",
            "node_modules/@middy/**",
            `${handlerPath(__dirname)}/updateTodo.*`,
        ],
    },
};

export const deleteTodo = {
    handler: `${handlerPath(__dirname)}/deleteTodo.deleteTodo`,
    events: [
        {
            http: {
                method: "delete",
                path: "todo/{id}",
            },
        },
    ],
    package: {
        patterns: [
            "node_modules/uuid/**",
            "node_modules/json-schema-to-ts/**",
            "node_modules/@middy/**",
            `${handlerPath(__dirname)}/deleteTodo.*`,
        ],
    },
};
