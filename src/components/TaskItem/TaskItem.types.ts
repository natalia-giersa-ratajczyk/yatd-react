import { CheckboxFieldProps } from '@/components/CheckboxField/CheckboxField.types';

export type TaskItemProps = {
  isCompleted?: boolean;
} & CheckboxFieldProps;

export type StyledTaskItemProps = {
  $isActive: TaskItemProps['isActive'];
  $disabled: TaskItemProps['disabled'];
};
