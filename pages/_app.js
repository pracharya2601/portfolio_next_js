import GlobalTheme from 'context/theme';
function MyApp({ Component, pageProps }) {
  return (
      <GlobalTheme>
        <Component {...pageProps} />
      </GlobalTheme>
    )
}

export default MyApp
