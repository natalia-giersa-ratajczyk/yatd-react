import { CheckboxFieldProps } from '@/components/CheckboxField/CheckboxField.types';

export type TaskItemProps = {
  taskClickHandler?: () => void;
  cancelClickHandler?: () => void;
} & CheckboxFieldProps;
