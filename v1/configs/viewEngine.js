import express from 'express';
import { engine } from 'express-handlebars';
const viewEngine = (app) => {
    app.use(express.static("./v1/public"))
    app.use(express.static("./v1/logs"))
    app.engine('.hbs', engine({ extname: '.hbs' }));
    app.set('view engine', '.hbs');
    app.set('views', './v1/views');
}
export default viewEngine;