"use client";
import React from "react";
import { BsArrowUp } from "react-icons/bs";

const GoTopButton = () => {
  const goTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ behavior: "smooth", top: 0 });
    }
  };
  return (
    <button
      type="button"
      onClick={goTop}
      className="bg-secondary p-4 rounded-lg text-white text-2xl"
    >
      <BsArrowUp />
    </button>
  );
};

export default GoTopButton;
