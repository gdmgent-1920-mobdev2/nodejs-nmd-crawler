import { default as express } from 'express';
import { default as request } from 'request-promise-native';
import { default as domino } from 'domino';
import { getMetadata } from 'page-metadata-parser';

/*
 * GET /proxy/content
 */
export const getContent = async (req: express.Request, res: express.Response) => {
    const uri = req.query.url;
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

/*
 * GET /proxy/seo
 */
export const getSEO = async (req: express.Request, res: express.Response) => {
    const uri = req.query.url;
    const options = {
        uri,
        json: false
    };
    request(options)
        .then((data: any) => {
            const doc = domino.createWindow(data).document;
            const metadata = getMetadata(doc, uri);
            return res.status(200).json(metadata);
        })
        .catch((err: any) => {
            return res.status(501).json({
                message: err.message,
                createdAt: Date.now()
            });
        });
};