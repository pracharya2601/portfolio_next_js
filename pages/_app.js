import 'bootstrap/dist/css/bootstrap.css';
import { useRouter } from "next/router";
import GlobalTheme from 'context/theme';
import { AnimatePresence } from "framer-motion";


const handExitComplete = ()=> {
  if (typeof window !== "undefined") {
    const hashId = window.location.hash;

    console.log({ location: window.location, hashId });

    if (hashId) {
      const element = document.querySelector(hashId);
      console.log({ element });

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      }
    }
  }
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
      <AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}>
          <GlobalTheme>
            <Component {...pageProps}  key={router.route}/>
          </GlobalTheme>
      </AnimatePresence>
    )
}


export default MyApp
