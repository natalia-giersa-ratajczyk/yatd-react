import { CheckboxFieldProps } from '@/components/CheckboxField/CheckboxField.types';

export type TaskItemProps = {
  taskClickHandler?: () => void;
  cancelClickHandler?: (id: string) => void;
} & CheckboxFieldProps;
