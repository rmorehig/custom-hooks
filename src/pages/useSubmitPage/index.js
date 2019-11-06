import React from 'react';
import useSubmit from '../../hooks/useSubmit';

const useSubmitPage = () => {
  const getData = async () => {
    const headers = {
      'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
      'x-rapidapi-key': '23d34f0328msh1979bd5e7b8703dp109ab3jsnd36d796f33c1'
    };
    const options = {
      headers
    };
    const results = await fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/info', options);
    const data = await results.json();
    return data;
  };
  const [handleSubmit, data, loading, error] = useSubmit(getData);
  return (
    <>
      <section className="section">
        <div className="container" style={{ padding: '1rem' }}>
          <button type="button" onClick={handleSubmit} className="button is-primary">
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
                {data.classes.map(el => (
                  <li key={el}>{el}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default useSubmitPage;
