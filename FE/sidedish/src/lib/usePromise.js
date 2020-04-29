import { useState, useEffect } from "react";
import axios from "axios";

// 활용 코드 출처: https://github.com/velopert/learning-react

const usePromise = (api) => {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await axios.get(api);
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
  }, [api]);

  return [loading, resolved, error];
};

export default usePromise;
