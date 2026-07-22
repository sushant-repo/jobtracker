let deleteModalState = null;
let listeners = new Set();

export const deleteModalStore = {
  subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },

  getSnapshot() {
    return deleteModalState;
  },
  trigger(title, message) {
    return new Promise((resolve) => {
      deleteModalState = { title, message, resolve, isClosing: false };
      listeners.forEach((listener) => listener());
    });
  },
  resolve(confirmed) {
    if (!deleteModalState) return;
    deleteModalState.resolve(confirmed);
    deleteModalState = { ...deleteModalState, isClosing: true };
    listeners.forEach((listener) => listener());
  },
  clearState() {
    deleteModalState = null;
    listeners.forEach((listener) => listener());
  },
};
