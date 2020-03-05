import { default as express, Express } from 'express';

import * as helloController from './controllers/hello.controller';
import * as proxyController from './controllers/proxy.controller';

// Constants
const PORT: Number = Number(process.env.PORT) || 8080;

// Create Express server
const app: Express = express();

// Routes
app.get('/api/hello', helloController.getHello);
app.get('/nmd', (req: express.Request, res: express.Response) => {
    res.status(200).json({
        message: "Greathings Earthling we are NMD, you will be assimilated!",
        createdAt: Date.now()
    });
});
app.get('/proxy/content', proxyController.getContent);

// Run the Server on a specified port
app.listen(PORT, () => console.log(`Server running and listining on, port ${PORT}`));