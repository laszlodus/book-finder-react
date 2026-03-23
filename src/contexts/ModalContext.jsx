import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal(bookId) {
    setSelectedBookId(bookId);
    setIsModalOpen(true);
  }

  function closeModal() {
    setSelectedBookId(null);
    setIsModalOpen(false);
  }
  return (
    <ModalContext.Provider
      value={{ openModal, closeModal, selectedBookId, isModalOpen }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
}

export { ModalProvider, useModal };
