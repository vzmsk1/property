import type { ReactNode } from "react";

export interface InfoBoxTypes {
  heading: string;
  backgroundColor: string;
  textColor?: string;
  buttonInfo: {
    link: string;
    text: string;
    backgroundColor: string;
  };
  children: ReactNode;
}
