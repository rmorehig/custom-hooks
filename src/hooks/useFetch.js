import { useState } from 'react';

export default (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getData = async () => {
    try {
      setData(null);
      setLoading(true);
      setError(null);
      const results = await fetch(url, options);
      const res = await results.json();
      setData(res);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return [getData, data, loading, error];
};
