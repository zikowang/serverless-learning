import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { formatJSONResponse } from "../../libs/api-gateway";
import { middyfy } from "../../libs/lambda";
import { todosService } from "../../services/index";

import { v4 as uuidv4 } from "uuid";
import { CustomAPIGatewayProxyEvent } from "src/types/middyTypesExtended";
import Todo from "src/model/Todo";

export const getAllTodos = middyfy(async (): Promise<APIGatewayProxyResult> => {
    const todos = await todosService.getAllTodos();
    return formatJSONResponse({
        todos,
    });
});

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
