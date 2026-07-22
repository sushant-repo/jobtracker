import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import { LoadingProvider } from '../../context/LoadingContext';
import Loading from '../shared/Loading';
import GlobalDeleteConfirmation from '@/components/global/GlobalDeleteConfirmation';

export default function PageLayout() {
  return (
    <LoadingProvider>
      <GlobalDeleteConfirmation />
      <Header />
      <Loading />
      <Outlet />
    </LoadingProvider>
  );
}
