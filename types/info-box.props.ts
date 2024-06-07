import type { ReactNode } from "react";

export interface InfoBoxProps {
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
