import React, { createContext, useState } from "react";
import movieData from "../data/movieData";

export const MovieContext = createContext();
export const DataContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState(movieData);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

export const DataProvider =(props)=> {
  const [search,setSearch] = useState("");
  return (
    <DataContext.Provider value={[search,setSearch]}>
      {props.children}
    </DataContext.Provider>
  )
};