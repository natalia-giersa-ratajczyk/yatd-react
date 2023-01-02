import { ReactNode } from 'react';

import { Tasks } from '@/interfaces/task';

export interface TaskContextProps {
  tasks: Tasks;
  addNewTaskHandler: (text: string) => void;
  markAsCompletedHandler?: () => void;
  deleteHandler?: () => void;
}

export interface TaskContextProviderProps {
  children: ReactNode;
}
