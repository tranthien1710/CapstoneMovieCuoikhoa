import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import BannerMovie from '../component/BannerMovie'
import Footer from '../component/Footer'
import HeaderMovie from '../component/HeaderMovie'
import ListMovies from '../component/ListMovies'
import ScheduleCinema from '../component/ScheduleCinema'
import { fetchListBannerAction, fetchListMovieAction, fetchScheduleCinemaAction } from '../redux/action'

const Home = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchListBannerAction)
    dispatch(fetchListMovieAction())
     dispatch(fetchScheduleCinemaAction)
  })
  return (
    <div>
  
     <BannerMovie/>
     <ListMovies/>
     <ScheduleCinema/>
     <Footer/>
    </div>
  )
}

export default Home
