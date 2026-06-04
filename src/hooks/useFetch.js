import { useEffect, useState } from "react";

/**
 * Custom Hook: useFetch
 * Purpose:
 * - Reusable data fetching logic
 * - Handles loading + error automatically
 */
export default function useFetch(url) {
  const [data, setData] = useState(null); // stores API data
  const [isLoading, setIsLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state

  useEffect(() => {
    const controller = new AbortController(); // used for cleanup


    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
          setIsLoading(false);
        }
      });

    // cleanup function (prevents memory leaks)
    return () => controller.abort();
  }, [url]);

  return { data, isLoading, error };
}