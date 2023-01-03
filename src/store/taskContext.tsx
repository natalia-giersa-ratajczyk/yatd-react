/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';

import { Tasks } from '@/interfaces/task';

import { TaskContextProps, TaskContextProviderProps } from './taskContext.types';

const TaskContext = React.createContext<TaskContextProps>({
  tasks: [],
  completedTasks: [],
  addNewTaskHandler: () => {},
  markAsCompletedHandler: () => {},
  // deleteHandler: () => {},
});

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [tasks, setTasks] = useState<Tasks>([]);
  const [completedTasks, setCompletedTasks] = useState<Tasks>([]);

  const addNewTaskHandler = (text: string) => {
    setTasks((prevTasks) => [...prevTasks, { id: text, text, isCompleted: false }]);
  };

  const markAsCompletedHandler = (id: string) => {
    const completedTask = tasks.find((task) => task.id === id);
    if (typeof completedTask === 'undefined') {
      return;
    }

    completedTask.isCompleted = true;

    setTasks((prevTasks) => prevTasks.filter((task) => task !== completedTask));

    setCompletedTasks((prevTasks) => [...prevTasks, completedTask]);
  };

  return (
    <TaskContext.Provider value={{ tasks, completedTasks, addNewTaskHandler, markAsCompletedHandler }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
