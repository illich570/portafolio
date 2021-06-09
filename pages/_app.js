import { useEffect } from 'react'
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './_app.css';

export default function RootApp({ Component, pageProps }) {

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles && jssStyles.parentNode.removeChild(jssStyles);
  },[])
  
  return (
    <>
      <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}