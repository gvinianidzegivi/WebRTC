import type { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

export const VideoPlayerOptions = ({ children }: PropsType) => {
  return <>{children}</>;
};
