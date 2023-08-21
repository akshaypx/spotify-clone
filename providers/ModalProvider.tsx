"use client";

import Modal from "@/components/Modal";

import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  //this shows that rendering is done in client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Modal title="test" description="test" isOpen onChange={() => {}}>
        Test Children
      </Modal>
    </>
  );
};

export default ModalProvider;
