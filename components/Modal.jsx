"use client";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }) {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHide() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="p-0 border-0 bg-transparent outline-none overflow-visible backdrop:bg-black/70 backdrop:backdrop-blur-sm fixed inset-0 m-auto max-w-6xl w-[95vw]"
    >
  
      <div className="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-h-[90vh] overflow-y-auto">

        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={onHide}
            type="button"
            aria-label="Close modal"
            className="p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-150 outline-none"
          >
            <Image src="/xmark.svg" alt="close" width={20} height={20} />
          </button>
        </div>

    
        <div className="pt-2">
          {children}
        </div>
      </div>
    </dialog>,
    document.getElementById("modal-root-content")
  );
}