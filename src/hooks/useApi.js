import { createContext, useState, useEffect, useContext } from 'react';

export const ApiContext = createContext({});

export const useApi = ({
  method = 'GET',
  autoTrigger = true,
  url,
  headers,
  defaultData,
  bodyData
}) => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(defaultData || null);
  const [error, setError] = useState();
  const [status, setStatus] = useState();
  const [responseObj, setResponseObj] = useState();

  /**
   * The default configuration can be overriden by
   * providing values in ApiContext
   */
  const globalConfig = useContext(ApiContext);

  /**
   * Requester function
   */
  const sendRequest = requestData => {
    const requestConfig = {
      method,
      data: requestData,
      headers
    };

    /**
     * Merge request config with global sconfig. If empty,
     * globalConfig defaults to {}
     */
    const apiConfig = Object.assign({}, globalConfig, requestConfig);

    /**
     * Return a Promise to enable the calling code to chain
     * network requests in the correct order.
     */
    return new Promise(async (resolve, reject) => {
      setLoading(true);
      try {
        const response = await fetch(url, apiConfig);
        const data = await response.json();
        setData(data);
        setStatus(response.status);
        resolve(data);
      } catch (err) {
        setError(error);
        reject(err);
      } finally {
        setLoading(false);
        if (initialLoad) setInitialLoad(false);
      }
    });
  };

  const response = [
    {
      loading,
      data,
      error,
      status,
      initialLoad,
      pendingOrLoading: initialLoad || loading,
      responseObj
    },
    sendRequest
  ];
  return response;
};

export default useApi;
