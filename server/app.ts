import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';
import { storyController } from './routes/stories/story.controllers';


const app = new Hono();

// GLOBAL MIDDLEWARES
app.use('*', logger());
app.use('*', prettyJSON());

// ROUTES
app.route('/stories', storyController);


export default app;
