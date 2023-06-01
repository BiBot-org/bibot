// import configLocal from "./config.local";
import configDevelop from "./config.develop";

const Config = () => {
  switch (process.env.RUN_MODE) {
    case "dev":
      return configDevelop;
    default:
      return configDevelop;
  }
};

export default Config;
