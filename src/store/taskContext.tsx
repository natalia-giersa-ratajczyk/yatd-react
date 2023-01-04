import React, { useEffect, useState } from 'react';

import { Tasks } from '@/interfaces/task';

import { TaskContextProps, TaskContextProviderProps } from './taskContext.types';

const TaskContext = React.createContext<TaskContextProps>({
  tasks: [],
  completedTasks: [],
  addNewTaskHandler: () => {},
  markAsCompletedHandler: () => {},
  deleteHandler: () => {},
  editHandler: () => {},
});

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const localStorageTasksKey = 'tasks';
  const localStorageCompletedTasksKey = 'completedTasks';

  const [tasks, setTasks] = useState<Tasks>(JSON.parse(localStorage.getItem(localStorageTasksKey) ?? '') ?? []);
  const [completedTasks, setCompletedTasks] = useState<Tasks>(
    JSON.parse(localStorage.getItem(localStorageCompletedTasksKey) ?? '') ?? [],
  );

  useEffect(() => {
    localStorage.setItem(localStorageTasksKey, JSON.stringify(tasks));
    localStorage.setItem(localStorageCompletedTasksKey, JSON.stringify(completedTasks));
  }, [tasks, completedTasks]);

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

  const deleteHandler = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setCompletedTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const editHandler = (id: string, text: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, text };
        }

        return task;
      }),
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, completedTasks, addNewTaskHandler, markAsCompletedHandler, deleteHandler, editHandler }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
