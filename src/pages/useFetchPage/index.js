import React from 'react';
import useFetch from '../../hooks/useFetch';

const useFetchPage = () => {
  const headers = {
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    'x-rapidapi-key': '23d34f0328msh1979bd5e7b8703dp109ab3jsnd36d796f33c1'
  };
  const options = {
    headers
  };

  const [getData, data, loading, error] = useFetch(
    'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
    options
  );
  return (
    <>
      <section className="section">
        <div className="container" style={{ padding: '1rem' }}>
          <button onClick={getData} className="button is-primary">
            Submit Data
          </button>
        </div>
        <div className="container">
          {loading && 'Loading data...'}
          {error && error}
          {data && (
            <div>
              <h1 className="title">Hearthstone Classes: </h1>
              <ul>
                {data.classes.map((el, index) => {
                  return <li key={index}>{el}</li>;
                })}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default useFetchPage;
