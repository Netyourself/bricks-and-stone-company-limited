import { companyName } from '@/Utils/constants';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Head>
        <title>{companyName}</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
