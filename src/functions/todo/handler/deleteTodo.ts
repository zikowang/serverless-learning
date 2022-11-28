import { APIGatewayProxyResult } from "aws-lambda";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { todosService } from "@services/index";

import { CustomAPIGatewayProxyEvent } from "@customTypes/middyTypesExtended";
import Todo from "@model/Todo";

export const deleteTodo = middyfy(
    async (
        event: CustomAPIGatewayProxyEvent<Todo>
    ): Promise<APIGatewayProxyResult> => {
        const id = event.pathParameters?.id;

        if (!id) {
            return formatJSONResponse({
                status: 500,
                message: "id expected",
            });
        }

        try {
            const todo = await todosService.deleteTodo(id);
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
