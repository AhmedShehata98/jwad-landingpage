"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
};
const Modal = ({ children }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.document.body.classList.add("prevent-scroll");
    }
    return () => {
      if (typeof window !== "undefined") {
        window.document.body.classList.remove("prevent-scroll");
      }
    };
  }, []);
  return isMounted
    ? createPortal(children, document.querySelector("#modal") as Element)
    : null;
};

export default Modal;
