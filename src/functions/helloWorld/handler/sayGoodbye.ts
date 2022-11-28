import {
    Context,
    APIGatewayProxyCallback,
    APIGatewayEvent,
    APIGatewayProxyResult,
} from "aws-lambda";

export const say = async (
    _event: APIGatewayEvent,
    _context: Context,
    _callback: APIGatewayProxyCallback
): Promise<APIGatewayProxyResult> => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Goodbye from Zicheng!",
        }),
    };

    return response;
};
