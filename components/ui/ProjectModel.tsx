import React, { useRef, useEffect } from "react";
import Image from "next/image";

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
  project: {
    title: string;
    date: string;
    img: string;
    description: string;
  };
}

const ProjectModal: React.FC<ModalProps> = ({ showModal, onClose, project }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Handle click outside to close the modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal, onClose]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 w-screen h-screen">
      <div
        ref={modalRef}
        className="bg-white p-3 max-w-[400px] w-full"
      >
        {/* Modal Content */}
        <h1 className="text-lg font-bold mb-2 text-slate-700">{project.title}</h1>
        <p className="text-gray-700 mb-2 text-sm">{project.date}</p>
        
        <Image
          src={project.img}
          alt={project.title}
          width={300}
          height={50}
          className="max-w-[400px] w-full"
        />
        
        <p className="text-gray-600 text-sm max-h-[100px] overflow-y-scroll mt-3 rounded border">{project.description}</p>
        
        {/* Close Button */}
        <button
          className="mt-2 border border-primary text-primary px-4 py-2 rounded-md hover:bg-orange-700 transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
