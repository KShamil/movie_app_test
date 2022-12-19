import React from "react";
import { useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [direct, setDirect] = useState("");
  const [descr, setDescr] = useState("");
  const [actor1, setActor1] = useState("");
  const [actor2, setActor2] = useState("");
  const [actor3, setActor3] = useState("");
  const [actor4, setActor4] = useState("");
  const [actor5, setActor5] = useState("");
  const navigate = useNavigate();

  const [setMovies] = useContext(MovieContext);

  const updatePhoto = (e) => {
    setPhoto(e.target.value);
  };
  const updateTitle = (e) => {
    setTitle(e.target.value);
  };
  const updateDirect = (e) => {
    setDirect(e.target.value);
  };
  const updateDescr = (e) => {
    setDescr(e.target.value);
  };
  const updateActor1 = (e) => {
    setActor1(e.target.value);
  };
  const updateActor2 = (e) => {
    setActor2(e.target.value);
  };
  const updateActor3 = (e) => {
    setActor3(e.target.value);
  };
  const updateActor4 = (e) => {
    setActor4(e.target.value);
  };
  const updateActor5 = (e) => {
    setActor5(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [
      ...prevMovies,
      {
        poster: photo,
        title: title,
        direct: direct,
        descr: descr,
        actor1: actor1,
        actor2: actor2,
        actor3: actor3,
        actor4: actor4,
        actor5: actor5,
      },
    ]);
    navigate("/movieblog");
  };

  return (
    <div className="dashboard">
      <div className="dashboard-content container col-8">
        <form onSubmit={addMovie}>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label text-white"
            >
              Photo
            </label>
            <input
              onChange={updatePhoto}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label text-white"
            >
              Title
            </label>
            <input
              onChange={updateTitle}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label text-white"
            >
              Direct
            </label>
            <input
              onChange={updateDirect}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label text-white"
            >
              Description
            </label>
            <input
              onChange={updateDescr}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label text-white"
            >
              Actors
            </label>
            <input
              onChange={updateActor1}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={updateActor2}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={updateActor3}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={updateActor4}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={updateActor5}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="add-btn btn">
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
