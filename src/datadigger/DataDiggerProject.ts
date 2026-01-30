export interface DataDiggerProject {
  projectKey: string;
  projectDir: string;
  projectName: string;
  dlcHome: string;
  oeVersion: string;
  dbConnections: string[];
  dataDiggerPath: string | undefined;
  projectParameters: string;
  extraParameters: string;
}
