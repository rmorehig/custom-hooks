import React from 'react';
import useApi from '../../hooks/useApi';

const useApiPage = () => {
  const [{ loading, data, error }, getData] = useApi({
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
    headers: {
      'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
      'x-rapidapi-key': '23d34f0328msh1979bd5e7b8703dp109ab3jsnd36d796f33c1'
    },
    defaultData: { patches: '', classes: [] }
  });

  console.log(data);
  return (
    <>
      <section className="section">
        <div className="container" style={{ padding: '1rem' }}>
          <button type="button" onClick={getData} className="button is-primary">
            Submit Data
          </button>
        </div>
        <div className="container">
          {error && error}
          {loading ? (
            'Loading data...'
          ) : (
            <div>
              <h1 className="title">Hearthstone Classes: </h1>
              <ul>{data && data.classes.map(el => <li key={el}>{el}</li>)}</ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default useApiPage;
