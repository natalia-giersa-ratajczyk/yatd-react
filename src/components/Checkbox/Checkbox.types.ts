export interface CheckboxProps {
  id: string;
  name: string;
  checked?: boolean;
  disabled?: boolean;
  isActive?: boolean;
  clickHandler?: (id: string) => void;
}

export type StyledCheckboxProps = {
  $checked?: CheckboxProps['checked'];
  $disabled?: CheckboxProps['disabled'];
  $isActive?: CheckboxProps['isActive'];
};
