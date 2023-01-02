/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import { Tasks } from '@/interfaces/task';

interface TaskContextProps {
  tasks: Tasks;
  addNewTaskHandler: () => void;
  markAsCompletedHandler?: () => void;
  deleteHandler?: () => void;
}

interface TaskContextProviderProps {
  children: ReactNode;
}

const TaskContext = React.createContext<TaskContextProps>({
  tasks: [],
  addNewTaskHandler: () => {},
  // markAsCompletedHandler: () => {},
  // deleteHandler: () => {},
});

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const tasks: Tasks = [
    {
      id: 'test',
      text: 'test context',
      isCompleted: false,
    },
  ];

  const addNewTaskHandler = () => {
    console.log(tasks);
  };

  return <TaskContext.Provider value={{ tasks, addNewTaskHandler }}>{children}</TaskContext.Provider>;
};

export default TaskContext;
