import { CheckboxFieldProps } from '@/components/CheckboxField/CheckboxField.types';

export type TaskItemProps = {
  isCompleted?: boolean;
} & CheckboxFieldProps;
