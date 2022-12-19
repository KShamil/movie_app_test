import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { MovieProvider } from '../context/MovieContext'
import Authentication from '../pages/Authentication'
import Dashboard from '../pages/Dashboard'
import DetailsPage from '../pages/DetailsPage'
import HomePage from '../pages/HomePage'
import MovieBlog from '../pages/MovieBlog'


const AppRouter = () => {

  const [search,setSearch] = useState("");

  const handleSearch =(e)=> {
    setSearch(e.target.value)
  }

  return (
    <BrowserRouter>
    <MovieProvider>
      <Navbar searchValue={handleSearch}/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/movieblog' element={<MovieBlog search={search}/>}></Route>
        <Route path='/movieblog/:id' element={<DetailsPage/>}></Route>
        <Route path='/authentication' element={<Authentication/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </MovieProvider>
    </BrowserRouter>
  )
}

export default AppRouter