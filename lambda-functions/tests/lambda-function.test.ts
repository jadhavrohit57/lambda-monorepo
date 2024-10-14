import { handler } from '../src/index';
import { APIGatewayProxyEvent } from 'aws-lambda';

describe('handler', () => {

    it('returns Hello, Rohit', async () => {
        const event = {
            queryStringParameters: { name: 'Rohit' }
        } as unknown as APIGatewayProxyEvent;
        const result = await handler(event);
        if (typeof result !== 'string') {
            expect(result.body).toBe(JSON.stringify({ message: 'Hello, Rohit' }));
        } else {
            throw new Error('Result is not a string');
        }
    });

    it('returns Hello, World', async () => {
        const event = {} as APIGatewayProxyEvent;
        const result = await handler(event);
        if (typeof result !== 'string') {
            expect(result.body).toBe(JSON.stringify({ message: 'Hello, World' }));
        } else {
            throw new Error('Result is not a string');
        }
    });

})
