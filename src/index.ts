import { default as express, Express } from 'express';

// Constants
const PORT: Number = Number(process.env.PORT) || 8080;

// Create Express server
const app: Express = express();

// Run the Server on a specified port
app.listen(PORT, () => console.log(`Server running and listining on, port ${PORT}`));