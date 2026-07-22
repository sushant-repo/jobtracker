import { useDeleteModal } from '@/hooks/useDeleteModal';
import { createPortal } from 'react-dom';
import Button from '@/components/Button';
import { useEffect, useRef } from 'react';
import { Modal } from 'bootstrap';
import { deleteModalStore } from '../../stores/deleteModalStore';

export default function GlobalDeleteConfirmation() {
  const { isOpen, title, message, confirm, cancel } = useDeleteModal();
  const modalRef = useRef(null);
  const bsModalInstance = useRef(null);

  useEffect(() => {
    if (!modalRef.current) return;

    if (!bsModalInstance.current) {
      bsModalInstance.current = new Modal(modalRef.current, {
        backdrop: 'static',
        keyboard: false,
      });

      const handleHide = () => {
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      };

      const handleHidden = () => {
        deleteModalStore.clearState();
      };

      modalRef.current.addEventListener('hide.bs.modal', handleHide);
      modalRef.current.addEventListener('hidden.bs.modal', handleHidden);

      return () => {
        modalRef.current?.removeEventListener('hide.bs.modal', handleHide);
        modalRef.current?.removeEventListener('hidden.bs.modal', handleHidden);
      };
    }
  }, []);

  useEffect(() => {
    if (!bsModalInstance.current) return;

    if (isOpen) {
      bsModalInstance.current.show();
    } else {
      bsModalInstance.current.hide();
    }
  }, [isOpen]);

  return createPortal(
    <div className="modal fade" ref={modalRef} tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <strong className="modal-title">{title || 'Confirm Action'}</strong>
            <button
              type="button"
              className="btn-close"
              onClick={cancel}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <Button onClick={cancel}>Cancel</Button>
            <Button onClick={confirm} danger>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
