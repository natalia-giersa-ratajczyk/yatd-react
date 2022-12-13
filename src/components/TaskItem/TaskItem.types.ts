import { CheckboxFieldProps } from '@/components/CheckboxField/CheckboxField.types';

export type TaskItemProps = {
  clickHandler: () => void;
  cancelClickHandler?: () => void;
} & CheckboxFieldProps;
