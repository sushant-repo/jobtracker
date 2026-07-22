import { createPortal } from 'react-dom';
import useLoading from '@/hooks/useLoading';

export default function Loading() {
  const loadingOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  };

  const { loading } = useLoading();
  if (!loading) {
    return null;
  }

  return createPortal(
    <div className="loading-overlay" style={loadingOverlayStyle}>
      <div className="spinner-border text-primary" role="status" />
    </div>,
    document.body
  );
}
