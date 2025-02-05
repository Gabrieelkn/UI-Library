"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";

export default function Example() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAction = () => {
    alert("Action performed!");
    closeModal();
  };

  return (
    <div className="p-8">
      <Button variant="outline" onClick={openModal}>
        Open Modal
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAction={handleAction}
        title="Modal Title"
        actionText="Confirm"
        variant="small"
      />
    </div>
  );
}

function Modal({
  isOpen,
  onClose,
  title,
  onAction,
  actionText = "Action",
  variant = "default",
}) {
  const modalRef = useRef(null);
  const [showModal, setShowModal] = useState(isOpen);
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      controls.start({ opacity: 1, scale: 1 });
    } else {
      controls
        .start({ opacity: 0, scale: 0.9 })
        .then(() => setShowModal(false));
    }
  }, [isOpen, controls]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!showModal) return null;

  const modalVariants = {
    default: "max-w-sm",
    large: "max-w-3xl",
    small: "max-w-xs ",
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        ref={modalRef}
        className={`bg-white dark:bg-muted  rounded-lg shadow-lg w-3/4 p-6 relative ${modalVariants[variant]}`}
        initial={{ scale: 0.9 }}
        animate={controls}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-5 h-5 dark:text-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-xl dark:text-foreground font-semibold mb-4">
          {title}
        </h2>
        <p className=" dark:text-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. 3 .
        </p>
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Close
          </button>
          <button
            onClick={onAction}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {actionText}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
