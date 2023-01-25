export interface TextFieldProps {
  id: string;
  name: string;
  label: string;
  value?: string;
  placeholder?: string;
  onChange?: () => void;
}
