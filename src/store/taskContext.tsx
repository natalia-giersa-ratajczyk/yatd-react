/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';

import { Tasks } from '@/interfaces/task';

import { TaskContextProps, TaskContextProviderProps } from './taskContext.types';

const TaskContext = React.createContext<TaskContextProps>({
  tasks: [],
  addNewTaskHandler: () => {},
  // markAsCompletedHandler: () => {},
  // deleteHandler: () => {},
});

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [tasks, setTasks] = useState<Tasks>([]);

  const addNewTaskHandler = (text: string) => {
    setTasks((prevTasks) => [...prevTasks, { id: text, text, isCompleted: false }]);
  };

  return <TaskContext.Provider value={{ tasks, addNewTaskHandler }}>{children}</TaskContext.Provider>;
};

export default TaskContext;
