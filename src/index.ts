import { default as express, Express } from 'express';
import { default as bodyParser } from 'body-parser';
import { default as cors } from 'cors';

import * as helloController from './controllers/hello.controller';
import * as proxyController from './controllers/proxy.controller';


// Constants
const PORT: Number = Number(process.env.PORT) || 8080;

// Create Express server
const app: Express = express();

// Settings
app.use(cors({
    origin: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

// Routes
app.get('/api/hello', helloController.getHello);
app.get('/nmd', (req: express.Request, res: express.Response) => {
    res.status(200).json({
        message: "Greathings Earthling we are NMD, you will be assimilated!",
        createdAt: Date.now()
    });
});
app.get('/proxy/content', proxyController.getContent);
app.get('/proxy/seo', proxyController.getSEO);
app.get('*', (req: express.Request, res: express.Response) => {
    res.status(404).json({
        message: 'The resources doesn\'t exists',
        createdAt: Date.now()
    });
});

// Run the Server on a specified port
app.listen(PORT, () => console.log(`Server running and listining on, port ${PORT}`));