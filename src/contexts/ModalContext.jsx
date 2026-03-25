import { createContext, useState } from "react";

export const ModalContext = createContext();

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

export { ModalProvider };
