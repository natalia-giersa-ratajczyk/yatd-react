import Typography from '@/components/Typography';

import { CounterProps } from './Counter.types';

const Counter = ({ value }: CounterProps) => {
  return <Typography text={value} variant="heading" color="accent" />;
};

export default Counter;
