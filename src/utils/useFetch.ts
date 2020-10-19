import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    let isMounted = true;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setFetchData(data);
        }
      })
      .catch((err) => console.log(err));

    return () => {
      isMounted = false;
    };
  }, []);
  return fetchData;
};

export default useFetch;
