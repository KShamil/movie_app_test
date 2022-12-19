import React from "react";

const HomePage = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://www.joker.movie/images/share.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://preview.redd.it/oqduw7io0o281.jpg?auto=webp&s=ad3e9f96d15f49646043e7031858896180f51c63"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i0.wp.com/thecinemafiles.com/wp-content/uploads/2017/02/John-Wick-2-Banner.jpg?ssl=1"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.etsystatic.com/6227474/r/il/a867cc/3619064725/il_fullxfull.3619064725_5sfm.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.blackadammovie.net/images/share.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://external-preview.redd.it/KyGjptvL22o3gtOip8JlAvgi1e5g7uzVyDTHzHbJeBQ.jpg?auto=webp&s=27bc01051ac7a56cc29de770fcddd2eb344edbf8"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomePage;
