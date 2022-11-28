import { APIGatewayProxyResult } from "aws-lambda";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { todosService } from "@services/index";

import { CustomAPIGatewayProxyEvent } from "src/customTypes/middyTypesExtended";
import Todo from "src/model/Todo";

export const updateTodo = middyfy(
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
            const todo = await todosService.updateTodo(id, {
                status: event.body.status ?? false,
            });
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
