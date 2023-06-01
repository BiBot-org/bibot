import configLocal from "./config.local";
import configDevelop from "./config.develop";

const Config = () => {
  switch (process.env.RUN_MODE) {
    case "local":
      return configLocal;
    default:
      return configLocal;
  }
};

export default Config;
