import React from "react";

function PagenatinCustom({ data, setCurrentPage, itemsPerPage, currentPage ,totalCount}) {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = totalCount?totalCount :20;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  if (data.length > 0) {
    return (
      <div className="container d-flex justify-content-center mt-5">
        <ul className="pagination ">
          {pageNumbers &&
            pageNumbers.map((number) => {
              return (
                <li className="page-item" key={number}>
                  <button
                    className={`pagnation-btn ${
                      currentPage === number ? "active" : ""
                    }`}
                    onClick={() => handlePageClick(number)}
                  >
                    {number}
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default PagenatinCustom;
