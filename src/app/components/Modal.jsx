import React, { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";

export const Modal = ({
  show,
  maxWidth = "2xl",
  closeable = true,
  onClose,
  children,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = null;
    }
  }, [show]);

  const close = useCallback(() => {
    if (closeable) {
      onClose();
    }
  }, [closeable, onClose]);

  const closeOnEscape = useCallback(
    (e) => {
      if (e.key === "Escape" && show) {
        close();
      }
    },
    [show, close]
  );

  useEffect(() => {
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = null;
    };
  }, [closeOnEscape]);

  const maxWidthClass = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl",
  }[maxWidth];

  if (!isMounted) return null;

  return createPortal(
    <div
      className={`fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50 transition-opacity duration-200 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={close}
    >
      <div
        className={`fixed inset-0 transform transition-all ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-gray-500 opacity-75" />
      </div>

      <div
        className={`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${maxWidthClass} ${
          show
            ? "opacity-100 translate-y-0 sm:scale-100"
            : "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};
