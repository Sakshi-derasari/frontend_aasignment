import { useEffect, useState } from "react";

function useCurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); // update time every second
    }, 1000);

    // cleanup (very important ✅)
    return () => clearInterval(interval);
  }, []);

  return time;
}

export default useCurrentTime;