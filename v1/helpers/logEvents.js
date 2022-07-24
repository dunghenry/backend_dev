import fs from 'fs/promises';
import { format } from 'date-fns';
import path from 'path';
import url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);
console.log(__dirname);
const fileName = `${__dirname}\\logs\\logs.log`
const logEvents = async (msg, path) => {
    const indexStr = path.indexOf('v1');
    const pathName = path.slice(indexStr);
    const dateTime = `${format(new Date(), 'dd-MM-yyyy\tss:mm:HH')}`;
    const contentLog = `${dateTime} - ${msg} - ${pathName}\n`;
    try {
        await fs.appendFile(fileName, contentLog);
    } catch (error) {
        console.log(error);
    }
}
export default logEvents;