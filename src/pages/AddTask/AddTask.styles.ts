import styled from 'styled-components';

import { Button } from '@/components/Button/Button.styles';

export const AddTask = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 10rem;

  & ${Button} {
    align-self: flex-start;
  }
`;
