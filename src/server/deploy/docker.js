const fs = require("fs");
const config = require('../../../package.json')

const DockerfilePath = "Dockerfile";
const pm2ConfigFile = "ecosystem.config.js";

async function docker() {
    if (!fs.existsSync(DockerfilePath)) {
        fs.writeFileSync(
            DockerfilePath,
            `
FROM hub.fabigbig.com/base/nodejs:18-pm2-logrotate
WORKDIR /app/
COPY . .
RUN pm2 set pm2-logrotate:max_size 1G
RUN pm2 set pm2-logrotate:retain 7
EXPOSE ${config.config.port}
CMD [ "pm2-runtime", "ecosystem.config.js" ]
`
        );
    }
    if (!fs.existsSync(pm2ConfigFile)) {
        fs.writeFileSync(
            pm2ConfigFile,
            `
const { pm2 } = require('@fdd/config')

module.exports = pm2()
      `
        );
    }
}

module.exports = docker;
