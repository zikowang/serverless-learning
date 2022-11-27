import dynamoDBClient from "../model";
import TodoServerice from "./todosService";

export const todosService = new TodoServerice(dynamoDBClient());
