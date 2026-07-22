import { createBrowserRouter } from 'react-router-dom';
import AddJob from './pages/AddJob';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Header from './components/header/Header';
import PageLayout from './components/layout/PageLayout';

const router = createBrowserRouter([
  {
    Component: PageLayout,
    children: [
      { index: true, Component: Home },
      { path: 'jobs', Component: Jobs },
      { path: 'jobs/add', Component: AddJob },
    ],
  },
]);

export default router;
