import { useState } from "react";

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
      const data = await results.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return [getData, data, loading, error];
};
