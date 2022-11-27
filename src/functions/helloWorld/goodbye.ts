"use-strict";

import {
    Context,
    APIGatewayProxyCallback,
    APIGatewayEvent,
    APIGatewayProxyResult,
} from "aws-lambda";

export const say = async (
    event: APIGatewayEvent,
    context: Context,
    callback: APIGatewayProxyCallback
): Promise<APIGatewayProxyResult> => {
    console.log("Goodbye from Zicheng!");

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Goodbye from Zicheng!",
        }),
    };

    return response;
};
