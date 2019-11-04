import { useState } from "react";

export default submitFunction => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async () => {
    try {
      setData(null);
      setLoading(true);
      setError(null);
      const result = await submitFunction();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return [handleSubmit, data, loading, error];
};
