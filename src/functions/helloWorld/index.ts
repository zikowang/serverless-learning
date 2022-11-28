import { handlerPath } from "@libs/handler-resolver";

export const sayHello = {
    handler: `${handlerPath(__dirname)}/sayHello.say`,
    events: [
        {
            http: {
                method: "get",
                path: "sayHello",
            },
        },
    ],
    package: {
        patterns: ["!src/**", `${handlerPath(__dirname)}/sayHello.*`],
    },
};

export const sayGoodbye = {
    handler: `${handlerPath(__dirname)}/sayGoodbye.say`,
    events: [
        {
            http: {
                method: "get",
                path: "sayGoodbye",
            },
        },
    ],
    package: {
        patterns: ["!src/**", `${handlerPath(__dirname)}/sayGoodbye.*`],
    },
};
