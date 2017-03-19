// - constants/config.js
// loads _config.yaml and creates config object
// used for application server configuraton [server.js]
// for database configuration [db.js]
import { loadYaml } from 'node-yaml-config';
import path from 'path';

const configPath = path.resolve(__dirname, '../../_config.yaml');

module.exports = loadYaml(configPath);
