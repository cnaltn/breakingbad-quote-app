"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const Button = ({ title }) => {
  const router = useRouter();

  const handleRefresh = () => {
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={handleRefresh}
        className="bg-amber-400 px-12 py-2 rounded"
      >
        {title}
      </button>
    </div>
  );
};
