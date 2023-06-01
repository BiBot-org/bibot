export declare namespace ICommonConfig {
  export type Mode = "local" | "dev";

  export interface Params {
    userServiceUrl: string;
    expenseServiceUrl: string;
    cardServiceUrl: string;
    keycloakUrl: string;
    clientCridential?: string;
    mode: Mode;
  }
}

export default function getConfigs(params: ICommonConfig.Params) {
  const {
    userServiceUrl,
    expenseServiceUrl,
    cardServiceUrl,
    keycloakUrl,
    clientCridential,
    mode,
  } = params;

  return {
    userServiceUrl,
    expenseServiceUrl,
    cardServiceUrl,
    keycloakUrl,
    clientCridential,
    mode,

    api: {},
  };
}
