import { createClient } from "redis";
import logEvents from '../helpers/logEvents.js';
import url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const client = createClient();
client.on('error', (err) => {
    console.log("Connect Redis failed: " + err);
    logEvents(err.message, __filename)
});
client.on('connect', () => {
    console.log("Connect Redis successfully!");
});
(async () => {
    await client.connect();
})();
export default client;