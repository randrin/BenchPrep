import React from "react";

const EmptyList = ({search}) => {
  return (
    <div className="empty-list-wrapper">
      <div className="alert alert-info" role="alert">
        <i className="fas fa-frown" />
        <p>There are no matches search results with key <b>{search}</b>. Please try a new search</p>
      </div>
    </div>
  );
};

export default EmptyList;
