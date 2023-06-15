import getConfigs from "./config.common";

const userServiceUrl = `http://user.bibot.store`;
const expenseServiceUrl = `http://expense.bibot.store`;
const cardServiceUrl = `http://card.bibot.store`;
const receiptServiceUrl = `http://receipt.bibot.store`;
const keycloakUrl = `http://34.64.49.77`;
const clientCridential = process.env.KEYCLOAK_CLIENT_CREDENTIAL;
const mode = "local";

const configLocal = getConfigs({
  userServiceUrl,
  expenseServiceUrl,
  cardServiceUrl,
  receiptServiceUrl,
  keycloakUrl,
  clientCridential,
  mode,
});

export default configLocal;
