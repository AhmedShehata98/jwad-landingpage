import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
  containerId?: string;
};
export const useModal = ({ children, containerId }: Props) => {
  const container = document.querySelector(containerId || "#modal");

  return createPortal(children, container as HTMLElement) || null;
};
