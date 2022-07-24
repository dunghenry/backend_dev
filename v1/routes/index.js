import site from './site.js'
import auth from './apis/auth.js';
const routes = (app) =>{
    app.use('/', site);
    app.use('/v1/auth', auth);
}

export default routes;