import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import { LoadingProvider } from '../../context/LoadingContext';
import Loading from '../shared/Loading';

export default function PageLayout() {
  return (
      <LoadingProvider>
          <Header />
          <Loading />
          <Outlet />
      </LoadingProvider>
  );
}
