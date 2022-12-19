import React from "react";
import movieData from "../data/movieData";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const detalItems = movieData.find(p => p.id === id);
  return (
    <div className="details-page container mt-5 mb-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="detais-title display-4 lh-1 text-white">
            {detalItems?.title}
          </h1>
          <p className="lead text-white">
            {detalItems?.descr}
          </p>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            className="rounded-lg-3"
            src={detalItems?.poster}
            alt="error"
            width={400}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
