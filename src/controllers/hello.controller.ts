import { default as express } from 'express';

/*
 * GET /api/hello
 */
export const getHello = async (req: express.Request, res: express.Response) => {
    res.status(200).json({
        message: "Hello World!",
        createdAt: Date.now()
    });
};