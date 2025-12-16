export interface DataDiggerProject {
  projectName: string;
  projectDir: string;
  dlcHome: string;
  oeVersion: string;
  dbConnections: string[];
  dataDiggerPath: string | undefined;
  projectParameters: string;
  extraParameters: string;
}
