import dynamoDBClient from "@model/index";
import TodoServerice from "./todosService";

export const todosService = new TodoServerice(dynamoDBClient());
