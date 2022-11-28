import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { todosService } from "@services/index";

export const getTodo = middyfy(
    async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
        const id = event.pathParameters?.id;

        if (!id) {
            return formatJSONResponse({
                status: 500,
                message: "id expected",
            });
        }

        try {
            const todo = await todosService.getTodo(id);
            return formatJSONResponse({
                todo,
                id,
            });
        } catch (e) {
            return formatJSONResponse({
                status: 500,
                message: e,
            });
        }
    }
);
