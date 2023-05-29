import configLocal from "./config.local";

const Config = () => {
  switch (process.env.NEXT_PUBLIC_RUN_MODE) {
    case "local":
      return configLocal;
    default:
      return configLocal;
  }
};

export default Config;
