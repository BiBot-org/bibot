import configDevelop from "./config.develop";
import configLocal from "./config.local";

const Config = () => {
  switch (process.env.RUN_MODE) {
    case "local":
      return configLocal;
    default:
      return configLocal;
  }
};

export default Config;
