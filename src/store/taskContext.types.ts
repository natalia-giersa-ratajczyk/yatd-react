import { ReactNode } from 'react';

import { Tasks, TaskWithoutId } from '@/interfaces/task';

export interface TaskContextProps {
  tasks: Tasks;
  completedTasks: Tasks;
  addNewTaskHandler: (task: TaskWithoutId) => void;
  markAsCompletedHandler: (id: string) => void;
  deleteHandler: (id: string) => void;
  editHandler: (id: string, text: string) => void;
}

export interface TaskContextProviderProps {
  children: ReactNode;
}
