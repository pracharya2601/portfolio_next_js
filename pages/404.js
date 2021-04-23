import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Skeleton from "components/skeleton";

const NotFound = () => {
  const [time, setTime] = useState(10);
  const router = useRouter();
  useEffect(() => {
    if(time === 0) {
      router.push('/');
    } else {
      setTimeout(() => setTime(time-1), 1000);
    }
    
  }, [time])
  return (
    <Skeleton splashText={`404! Page Not Found! Redirecting to home in ${time}sec`}/>
  )
}

export default NotFound;