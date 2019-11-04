import React from "react";
import useSubmit from "../../hooks/useSubmit";

const useSubmitPage = () => {
  const mySubmitFunction = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const rnd = Math.random() * 10;
        rnd <= 5 ? resolve(rnd) : reject("Error occurred!");
      }, 1000);
    });
  };
  const [handleSubmit, data, loading, error] = useSubmit(mySubmitFunction);
  return (
    <>
      <section className="section">
        <div className="container">
          <button onClick={handleSubmit} className="button is-primary">
            Submit Data
          </button>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {loading && "Loading data..."}
          {error && error}
          {data && data}
        </div>
      </section>
    </>
  );
};

export default useSubmitPage;
