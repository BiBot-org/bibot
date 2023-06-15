export declare namespace ICommonConfig {
  export type Mode = "local" | "dev";

  export interface Params {
    userServiceUrl: string;
    expenseServiceUrl: string;
    cardServiceUrl: string;
    receiptServiceUrl: string;
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
    receiptServiceUrl,
    keycloakUrl,
    clientCridential,
    mode,
  } = params;

  return {
    userServiceUrl,
    expenseServiceUrl,
    cardServiceUrl,
    receiptServiceUrl,
    keycloakUrl,
    clientCridential,
    mode,

    api: {},
  };
}
