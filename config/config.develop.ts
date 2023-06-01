const ip = "10.10.10.73"
const userServiceUrl = `http://${ip}:8081`;
const expenseServiceUrl = `http://${ip}:8083`;
const cardServiceUrl = `http://${ip}:8084`;
const keycloakUrl = `http://${ip}:8080`;
const mode = "develop";

const configDevelop = ({
    userServiceUrl,
    expenseServiceUrl,
    cardServiceUrl,
    keycloakUrl,
    mode,
});

export default configDevelop;
