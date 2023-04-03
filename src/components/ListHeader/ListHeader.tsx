import Counter from '@/components/Counter';
import Typography from '@/components/Typography';

import * as Styles from './ListHeader.styles';
import { ListHeaderProps } from './ListHeader.types';

const ListHeader = ({ text, counter }: ListHeaderProps) => {
  return (
    <Styles.ListHeader>
      <Typography text={text} variant="heading" renderAs="h2" />
      <Counter value={counter} />
    </Styles.ListHeader>
  );
};

export default ListHeader;
