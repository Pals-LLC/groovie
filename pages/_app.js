import { Provider as AuthProvider } from 'next-auth/client';
import { GlobalStyle, CSSReset } from '../styles/globals';

function App({ Component, pageProps }) {
  return (
      <AuthProvider session={pageProps.session}>
        <Component {...pageProps} />
        <GlobalStyle />
        <CSSReset />
      </AuthProvider>
  );
}

export default App;
