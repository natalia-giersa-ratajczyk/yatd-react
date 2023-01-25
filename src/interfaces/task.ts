export interface Task {
  id: string;
  text: string;
  description?: string;
  tags?: string;
  isCompleted?: boolean;
}

export type TaskWithoutId = Omit<Task, 'id'>;

export type Tasks = Task[];
