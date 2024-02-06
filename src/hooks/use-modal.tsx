"use client";

import { useEffect, useState } from "react";

export function useModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return {
    open,
    setOpen,
  };
}
