import {useState, useEffect, useRef} from 'react';

const SnippetsHolder = ({scriptLink}) => {
  const [loading, setLoading] = useState(true);
  const iframeRef = useRef({
    current: {},
  })
  const url = scriptLink.match('//(.*).js"')[1];
  console.log(url);
  const getIfraeDocHeight = doc => {
    doc || document;
    const body = doc.body,
          html = doc.documentElement;
    const height = Math.max(
      body.scrolllHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    return height;
  }

  const onIframeLoad = () => {
    setLoading(false);
    const ifrm = iframeRef.current;
    const doc = ifrm.contentDocument ? ifrm.contentDocument : ifrm.contentWindow.document;
    ifrm.style.height = getIfraeDocHeight(doc) + "px";
  };
  return (
    <div style={{minHeight: '100vh', minWidth: '100vw'}}>
      {loading && <h1 style={{textALign: 'center'}}>Loading ...</h1>}
      <iframe
        ref={iframeRef}
        onLoad={onIframeLoad}
        src={`/snippet?url=${url}`}
      >
      </iframe>
    </div>
  )
}

export default SnippetsHolder;