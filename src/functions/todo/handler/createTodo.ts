import { APIGatewayProxyResult } from "aws-lambda";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { todosService } from "@services/index";

import { v4 as uuidv4 } from "uuid";
import { CustomAPIGatewayProxyEvent } from "@customTypes/middyTypesExtended";
import Todo from "@model/Todo";

export const createTodo = middyfy(
    async (
        event: CustomAPIGatewayProxyEvent<Todo>
    ): Promise<APIGatewayProxyResult> => {
        try {
            const id = uuidv4();
            const todo = await todosService.createTodo({
                todosId: id,
                title: event.body.title,
                description: event.body.description,
                createdAt: new Date().toISOString(),
                status: false,
            });
            return formatJSONResponse({
                todo,
            });
        } catch (e) {
            return formatJSONResponse({
                status: 500,
                message: e,
            });
        }
    }
);
