import Counter from '@/components/Counter';
import Typography from '@/components/Typography';

import styles from './ListHeader.module.css';
import { ListHeaderProps } from './ListHeader.types';

const ListHeader = ({ text, counter }: ListHeaderProps) => {
  return (
    <div className={styles['list-header']}>
      <Typography text={text} variant="heading" renderAs="h2" />
      <Counter value={counter} />
    </div>
  );
};

export default ListHeader;
