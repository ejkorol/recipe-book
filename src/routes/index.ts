import { Router } from 'express';

import path from 'path';
import fs from 'fs';

/* ROUTER INSTANCE */
const router = Router();

/*
 * No need to ever import routes here,
 * function will auto-magically read the ./src/routes dir and
 * create the path and link modules for us.
 *
 * `./src/api.ts` then imports whatever is generated.
 */

const routesDir = path.resolve(__dirname);

fs.readdirSync(routesDir).forEach(file => {
  if (file !== 'index.js' && file !== 'index.ts' && (file.endsWith('.ts') || file.endsWith('.js'))) {
    const routePath = `/api/${file.replace('.ts', '').replace('.js', '').replace(/Routes$/, '').toLowerCase()}`;

    try {
      const routeModule = require(path.join(routesDir, file));

      if (routeModule && routeModule.default) {
        router.use(routePath, routeModule.default);
        console.info(`Registered: ${routePath}`);
      } else {
        console.error(`No default export found in ${file}`);
      }
    } catch (error) {
      console.error(`Failed to load route from ${file}:`, error);
    }
  }
});

export default router;
