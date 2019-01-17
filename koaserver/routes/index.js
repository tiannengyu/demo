const router = require('koa-router')();

router
    .get('*', async (ctx) => {
        ctx.type = 'text/html';
        ctx.body = `
         <!DOCTYPE html>
       <html lang="en">
       <head>
         <meta charset="UTF-8">
         <title>React SSR</title>
       </head>
       <body>
         <div id="app">aaa</div>
       </body>
     </html>
     `;
    });
const routes = router.routes();
module.exports = routes;
