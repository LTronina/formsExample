export interface IFormConfig {
  name: string;
  type: controlType;
  value: string;
}

export type controlType = "text" | "select";
