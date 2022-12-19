import React from "react";
import MovieCard from "../components/MovieCard";
import { MovieContext } from "../context/MovieContext";
import { useContext } from "react";
import '../config/i18n';
import { useTranslation } from 'react-i18next';

const MovieBlog = (props) => {
  const [movies] = useContext(MovieContext);
  const { t } = useTranslation();
  

  return (
    <div className="movie-blog container-fluid">
      <div className="content container d-flex justify-content-center flex-wrap align-items-center gap-5">
        {movies.filter((item) => item.title.toLowerCase().includes(props.search)).map((item,i) => (
          <MovieCard
            key={i}
            id={item.id}
            poster={item.poster}
            title={item.title}
            direct={t(`changeCardDirectLanguage.${i}`)}
            descr={t(`changeCardDescrLanguage.${i}`)}
            actor1={item.actor1}
            actor2={item.actor2}
            actor3={item.actor3}
            actor4={item.actor4}
            actor5={item.actor5}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieBlog;
