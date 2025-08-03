export interface Person {
  name: string;
  imageId: string;
  imageSize: string;
  theme?: Theme;
}

export type Theme = {
  backgroundColor: string;
  color: string;
};
