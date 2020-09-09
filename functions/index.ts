import next from 'next';
import * as functions from 'firebase-functions';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: __dirname, conf: { distDir: '.next' } });
const handle = app.getRequestHandler();

export const nextApp = functions.https.onRequest(async (req, res) => {
  if (process.env.APP_ENV !== 'production') {
    /* basic */
    const authUser = 'user';
    const authPass = 'pass';
    const { headers } = req;
    const authString = `Basic ${Buffer.from(`${authUser}:${authPass}`).toString('base64')}`;

    if (typeof headers.authorization === 'undefined' || headers.authorization !== authString) {
      return res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="Basic"' }).end('Unauthorized');
    }
  }

  console.log(`File: ${req.originalUrl}`);

  return app.prepare().then(() => handle(req, res));
});
