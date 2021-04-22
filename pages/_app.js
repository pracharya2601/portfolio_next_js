import 'bootstrap/dist/css/bootstrap.css';
import { useRouter } from "next/router";
import GlobalTheme from 'context/theme';
import { UserProvider } from '@auth0/nextjs-auth0';
import { AnimatePresence } from "framer-motion";

import useScrollPosition from 'hooks/useScrollPosition';


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
        <UserProvider>
          <GlobalTheme>
            <Component {...pageProps}  key={router.route}/>
          </GlobalTheme>
        </UserProvider>
      </AnimatePresence>
    )
}


export default MyApp
