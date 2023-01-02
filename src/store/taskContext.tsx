/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode, useState } from 'react';

import { Tasks } from '@/interfaces/task';

interface TaskContextProps {
  tasks: Tasks;
  addNewTaskHandler: (text: string) => void;
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
  const [tasks, setTasks] = useState<Tasks>([
    {
      id: 'test',
      text: 'test context',
      isCompleted: false,
    },
  ]);

  const addNewTaskHandler = (text: string) => {
    setTasks((prevTasks) => [...prevTasks, { id: text, text, isCompleted: false }]);
    console.log(tasks);
  };

  return <TaskContext.Provider value={{ tasks, addNewTaskHandler }}>{children}</TaskContext.Provider>;
};

export default TaskContext;
