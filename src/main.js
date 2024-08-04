import {web} from "./application/web.js";
import {logger} from "./application/logging.js";

const API_PORT = process.env.API_PORT || 3000;
const API_HOST = process.env.API_HOST || 'localhost';

web.listen(API_PORT, () => {
  logger.info(`App started at http://${API_HOST}:${API_PORT}`);
});