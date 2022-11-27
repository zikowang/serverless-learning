import { handlerPath } from "../../libs/handler-resolver";

export const sayHello = {
    handler: `${handlerPath(__dirname)}/handler.sayHello`,
    events: [
        {
            http: {
                method: "get",
                path: "sayHello",
            },
        },
    ],
};

export const sayGoodbye = {
    handler: `${handlerPath(__dirname)}/handler.sayGoodbye`,
    events: [
        {
            http: {
                method: "get",
                path: "sayGoodbye",
            },
        },
    ],
};
