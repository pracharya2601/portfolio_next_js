import Head from 'next/head';

const Meta = ({title, description, previewImageURL, currentURL}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      <meta name="theme-color" content="#4285f4" />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="google" content="nositelinkssearchbox" />
      <meta name="google" content="notranslate" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentURL} key="ogurl" />
      <meta property="og:image" content={previewImageURL} key="ogimage" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta property="og:site_name" content="Prakash Acharya Personal Portfolio" />

      <link rel="canonical" href={currentURL} />
      <meta name="renderer" content="webkit|ie-comp|ie-stand" />

      <title>{title}</title>
    </Head>
  )
}

export default Meta;