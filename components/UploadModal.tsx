"use client";

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModalStore = () => {
  const uploadModal = useUploadModal();

  const onChange = (open: boolean) => {
    if (!open) {
      //reset the form
      uploadModal.onClose();
    }
  };

  return (
    <Modal
      title="Upload Modal title"
      description="Upload modal description"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      Upload Content
    </Modal>
  );
};

export default UploadModalStore;
