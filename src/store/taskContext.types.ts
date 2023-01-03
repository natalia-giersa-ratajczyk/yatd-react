import { ReactNode } from 'react';

import { Tasks } from '@/interfaces/task';

export interface TaskContextProps {
  tasks: Tasks;
  completedTasks: Tasks;
  addNewTaskHandler: (text: string) => void;
  markAsCompletedHandler: (id: string) => void;
  deleteHandler: (id: string) => void;
}

export interface TaskContextProviderProps {
  children: ReactNode;
}
