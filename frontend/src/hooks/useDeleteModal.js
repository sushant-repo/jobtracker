import { useSyncExternalStore } from 'react';
import { deleteModalStore } from '@/stores/deleteModalStore';

export const useDeleteModal = () => {
  const config = useSyncExternalStore(
    deleteModalStore.subscribe,
    deleteModalStore.getSnapshot
  );

  return {
    isOpen: config !== null && !config.isClosing,
    title: config?.title || '',
    message: config?.message || '',
    confirm: () => deleteModalStore.resolve(true),
    cancel: () => deleteModalStore.resolve(false),
    confirmation: deleteModalStore.trigger,
  };
};
