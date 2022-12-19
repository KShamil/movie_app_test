import { t } from "i18next";
import React from "react";
import { Link } from "react-router-dom";
import '../config/i18n';
import { useTranslation } from 'react-i18next';

const MovieCard = ({
  id,
  poster,
  title,
  direct,
  descr,
  actor1,
  actor2,
  actor3,
  actor4,
  actor5,
}) => {
  const { t } = useTranslation();
  return (
    <div className="movie-card">
      <div className="poster">
        <img src={poster} alt="" />
      </div>
      <div className="details">
        {/* <img
          className="logo"
          src="https://cdn.mos.cms.futurecdn.net/BSs2g8No7CFR7ACu4rbVxL.jpg"
          alt=""
        /> */}
        <h1>{title}</h1>
        <h3>{direct}</h3>
        <div className="rating">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <span>4/5</span>
        </div>
        <div className="info">
          <p>{descr.substring(0, 70)}...</p>
        </div>
        <div className="tags">
          <Link to={`/movieblog/${id}`} className="read-more-btn">
            {t("changeCardCastLanguage.1")}
          </Link>
        </div>
        <div className="cast">
          <h4>{t("changeCardCastLanguage.0")}</h4>
          <ul>
            <li>
              <img src={actor1} alt="" />
            </li>
            <li>
              <img src={actor2} alt="" />
            </li>
            <li>
              <img src={actor3} alt="" />
            </li>
            <li>
              <img src={actor4} alt="" />
            </li>
            <li>
              <img src={actor5} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
