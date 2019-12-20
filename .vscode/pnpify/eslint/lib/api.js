const {dirname, resolve} = require(`path`);

const relPnpApiPath = "../../../../.pnp.js";

const absPnpApiPath = resolve(__dirname, relPnpApiPath);
const absRootPath = dirname(absPnpApiPath);

// Setup the environment to be able to require eslint
require(absPnpApiPath).setup();

const moduleResolution = require.resolve(`eslint`, {paths: [absRootPath]});

// Prepare the environment (to be ready in case of child_process.spawn etc)
process.env.NODE_OPTIONS = process.env.NODE_OPTIONS || ``;
process.env.NODE_OPTIONS += ` -r ${absPnpApiPath}`;

// Defer to the real eslint your application uses
module.exports = require(moduleResolution);
