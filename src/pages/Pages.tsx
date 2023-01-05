import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import * as Paths from '@/constants/routes';

const HomePage = lazy(() => import('@/pages/Home'));
const AddTaskPage = lazy(() => import('@/pages/AddTask'));

const Pages = () => {
  return (
    <Routes>
      <Route path={Paths.DEFAULT_PATH} element={<Navigate to={Paths.HOME_PATH} />} />
      <Route path={Paths.HOME_PATH} element={<HomePage />} />
      <Route path={Paths.ADD_TASK_PATH} element={<AddTaskPage />} />
      <Route path={Paths.NOT_FOUND_PATH} element={<Navigate to={Paths.HOME_PATH} />} />
    </Routes>
  );
};

export default Pages;
