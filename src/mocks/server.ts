// import {setupWorker} from 'msw'
// import {handlers} from './server-handlers'
// import {homepage} from '../../package.json'

// setupWorker(...handlers)

// const fullUrl = new URL(homepage)

// const server = setupWorker(...handlers)

// server.start({
//   quiet: true,
//   serviceWorker: {
//     url: fullUrl.pathname + 'mockServiceWorker.js',
//   },
// })

import { setupServer } from 'msw/node';
import { db } from './db';

// for node/test environments
export const server = setupServer(...db.user.toHandlers('rest', 'http://localhost:8000/api/') as any);