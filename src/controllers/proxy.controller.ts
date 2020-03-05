import { default as express } from 'express';
import { default as request } from 'request-promise-native';

/*
 * GET /proxy
 */
export const getContent = async (req: express.Request, res: express.Response) => {
    const uri = 'https://www.reddit.com/r/reactjs/';
    const options = {
        uri,
        json: false
    };
    request(options)
        .then((data: any) => {
            return res.status(200).send(data);
        })
        .catch((err: any) => {
            return res.status(501).json({
                message: err.message,
                createdAt: Date.now()
            });
        });
};