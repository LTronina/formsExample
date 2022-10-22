export interface IFormConfig {
  name: string;
  controlType: controlType;
  textDetails?: {
    placeholder: string;
  };
  selectDetails?: {
    options: string[];
  };
  required?: boolean;
}

export type controlType = "text" | "select";
