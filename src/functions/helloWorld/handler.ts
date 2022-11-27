"use-strict";

import {
    Context,
    APIGatewayProxyCallback,
    APIGatewayEvent,
    APIGatewayProxyResult,
} from "aws-lambda";

export const sayHello = async (
    event: APIGatewayEvent,
    context: Context,
    callback: APIGatewayProxyCallback
): Promise<APIGatewayProxyResult> => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello from Zicheng!",
        }),
    };

    return response;
};

export const sayGoodbye = async (
    event: APIGatewayEvent,
    context: Context,
    callback: APIGatewayProxyCallback
): Promise<APIGatewayProxyResult> => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Goodbye from Zicheng!",
        }),
    };

    return response;
};
