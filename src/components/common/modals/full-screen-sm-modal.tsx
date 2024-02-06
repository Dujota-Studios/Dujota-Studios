"use client";

import React, { useState } from "react";

type ModalProps = {
  title: string;
  content: string;
};

const ModalFullScreenSM: React.FC<ModalProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        type="button"
        className="m-1 ms-0 inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        onClick={toggleModal}
      >
        Full screen below sm
      </button>

      {isOpen && (
        <div className="hs-overlay pointer-events-none fixed start-0 top-0 z-[80] h-full w-full overflow-y-auto overflow-x-hidden">
          <div
            className="max-w-full transition-all sm:mx-auto"
            style={{
              opacity: isOpen ? 100 : 0,
              marginTop: isOpen ? "0" : "10rem",
            }}
          >
            <div className="flex flex-col bg-white sm:rounded-xl sm:border sm:shadow-sm dark:bg-gray-800 sm:dark:border-gray-700">
              <div className="flex items-center justify-between border-b px-4 py-3 dark:border-gray-700">
                <h3 className="font-bold text-gray-800 dark:text-white">
                  {title}
                </h3>
                <button
                  type="button"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  onClick={toggleModal}
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="h-4 w-4 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              <div className="overflow-y-auto p-4">
                <p className="mt-1 text-gray-800 dark:text-gray-400">
                  {content}
                </p>
              </div>
              <div className="flex items-center justify-end gap-x-2 border-t px-4 py-3 dark:border-gray-700">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  onClick={toggleModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalFullScreenSM;
