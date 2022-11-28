import { APIGatewayProxyEvent } from "aws-lambda";

export type CustomAPIGatewayProxyEvent<T> = APIGatewayProxyEvent & {
    body: T;
};
