import { ThemeProvider } from 'styled-components';

import Pages from '@/pages/Pages';
import { theme } from '@/theme/theme';

import GlobalStyle from './globalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Pages />
    </ThemeProvider>
  );
}

export default App;
