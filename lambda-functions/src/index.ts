
import { APIGatewayProxyEvent, APIGatewayProxyResultV2, Context, Handler } from "aws-lambda"

/**
 * @swagger
 * /dev/test:
 *   get:
 *     summary: Greeting
 *     description: Returns "Hello, [name]" if a name is provided, else return  "Hello, World"
 *     parameters:
 *       - in: query
 *         name: name
 *         required: false
 *         schema:
 *           type: string
 *         description: Name of the person to greet
 *     responses:
 *       200:
 *         description: A greeting message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello, Rohit
 */
export const handler = (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {
    const name = event.queryStringParameters?.name || 'World';
    return Promise.resolve({
        statusCode: 200,
        body: JSON.stringify({
            message: `Hello, ${name}`,
        }),
    });
}
