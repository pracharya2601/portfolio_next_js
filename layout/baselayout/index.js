import Head from 'next/head'
import Header from "layout/header";

const BaseLayout = ({children}) => {
  return(
    <>
      <Header />
      {children}
    </>
  )
}

export default BaseLayout;