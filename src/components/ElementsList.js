import React, { useState } from "react";
import EmptyList from "./EmptyList";
//import 'bootstrap/dist/css/bootstrap.min.css';

const ElementsList = (props) => {
  const data = props.elements;

  const [pageNumber, setPageNumber] = useState(1); //first page
  const [elementNumber, setElementNumber] = useState(15); // number of elements in the current page

  //get the maximum number of pages given the array and the  max number of elements I have in the page
  const pageNumbers = [];
  console.log(data.length / elementNumber, "page number");
  for (let i = 1; i < Math.ceil(data.length / elementNumber); i++) {
    pageNumbers.push(i);
  }

  // Logic for displaying elements
  const indexOfLastElement = pageNumber * elementNumber;
  const indexOfFirstElement = indexOfLastElement - elementNumber;
  const currentElement = data.slice(indexOfFirstElement, indexOfLastElement);

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };

  const handleNext = () => {
    if (pageNumber <= pageNumbers.length) {
      setPageNumber(pageNumber + 1);
    } else {
      return;
    }
  };

  // If user want to search in other page different to first page, reset fields to redirect in the first page
  if (pageNumber !== 1) {
    setPageNumber(1);
    setElementNumber(15);
  }

  return (
    <div className="elements-list-wrapper">
      {!!data.length ? (
        <>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Quote</th>
                <th>Context</th>
                <th>Source</th>
                <th>Theme</th>
              </tr>
            </thead>
            <tbody>
              {currentElement.map((data, idx) => {
                return (
                  <tr key={idx + 1}>
                    <td>{idx + 1}</td>
                    <td>{data.quote}</td>
                    <td>{data.context}</td>
                    <td>{data.source}</td>
                    <td>{data.theme}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="Page">
            Page{" "}
            <span className="pageNumber">
              {pageNumber} / {Math.ceil(data.length / elementNumber)}
            </span>
          </div>

          <div className="Button">
            <button
              type="button"
              onClick={handlePrev}
              className="mr-3 btn btn-primary"
            >
              <i className="fas fa-chevron-left"></i> Prev
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="btn btn-primary"
            >
              Next <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </>
      ) : (
        <EmptyList search={props.currentSeaech} />
      )}
    </div>
  );
};

export default ElementsList;
