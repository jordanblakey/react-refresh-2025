export interface Person {
  id?: number;
  name: string;
  imageId: string;
  imageSize?: string;
  theme?: Theme;
  profession?: string;
  accomplishment?: string;
}

export type Theme = {
  backgroundColor: string;
  color: string;
};
