import getConfigs from "./config.common";
const ip = "10.10.10.73";
const userServiceUrl = `http://${ip}:8081`;
const expenseServiceUrl = `http://${ip}:8083`;
const cardServiceUrl = `http://${ip}:8084`;
const receiptServiceUrl = `http://${ip}:8082`;
const keycloakUrl = `http://34.64.49.77`;
const mode = "dev";

const configDevelop = getConfigs({
  userServiceUrl,
  expenseServiceUrl,
  cardServiceUrl,
  receiptServiceUrl,
  keycloakUrl,
  mode,
});

export default configDevelop;
