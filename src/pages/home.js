import React from "react";
import '../style/home.css';
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    const [movies, setMovies] = useState([])
    const [shows, setShows] = useState([])



    const getMovies = async () => {
        try {
            await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=true&api_key=7bd249c069ed7a0ce955986c55b2f06e")
                .then(res => res.json())
                .then(json => setMovies(json.results))

        } catch (err) {
            console.log(err)
        }
    }

    const getShows = async () => {
        try {
            await fetch("https://api.themoviedb.org/3/discover/tv?api_key=7bd249c069ed7a0ce955986c55b2f06e")
                .then(res => res.json())
                .then(json => setShows(json.results))
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getMovies()
        getShows()
    }, [])



    return (
        <div class="cover" >

            {/*<!-- Navigation -->*/}
            <nav class="navbar navbar-expand-lg  bg-black bg-opacity-75" data-bs-theme="dark" >
                <div class="container-fluid mx-5 mt-1">

                    <a class="navbar-brand " href="#">
                        <img src="./images/netflix-logo.png" alt="Bootstrap" width="120" class="mx-2" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item mx-3">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item me-3">
                                <a class="nav-link" href="#">TV SHOWS</a>
                            </li>
                            <li class="nav-item me-3">
                                <a class="nav-link " aria-disabled="true">MOVIES</a>
                            </li>
                            <li class="nav-item me-3">
                                <a class="nav-link " aria-disabled="true">NEW & POPULAR</a>
                            </li>
                            <li class="nav-item me-3">
                                <a class="nav-link " aria-disabled="true">MY LIST</a>
                            </li>
                        </ul>

                        {/* Search Box */}
                        <form class="d-flex" role="search">
                            <input class="form-control me-2 border-black" type="search" placeholder="Search" aria-label="Search" />
                            <button class="input-group-text bg-black border-black" id="basic-addon2" ><i class="bi bi-search" ></i></button>
                        </form>

                        <ul class="navbar-nav ">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Account</a></li>
                                    <li><a class="dropdown-item" href="#">Help center</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>



            {/*<!-- Section-01 -->*/}
            <div class="m-1 ">

                <h3 class="text-light heading">
                    Most Popular
                </h3>

                <div class="">
                    <Swiper
                        slidesPerView={8}
                        spaceBetween={5}
                        modules={[Navigation]}
                        navigation

                    >
                        {movies.map((data) => {
                            return <>

                                <SwiperSlide>
                                    <div class="card" onClick={() => navigate(`/about?details=${data.id}&type=movie`)}>
                                        <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="movie" class="img-fluid" />
                                    </div>
                                </SwiperSlide>
                            </>
                        })}
                    </Swiper>
                </div>
            </div>


            {/*<!-- Section-02 -->*/}
            <div class="m-1 ">

                <h3 class="text-light heading">
                    Most Popular
                </h3>

                <div class="">
                    <Swiper
                        slidesPerView={8}
                        spaceBetween={5}
                        modules={[Navigation]}
                        navigation

                    >
                        {shows.map((data) => {
                            return <>

                                <SwiperSlide>
                                    <div class="card" onClick={() => navigate(`/about?details=${data.id}&type=show`)}>
                                        <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="movie" class="img-fluid" />
                                    </div>
                                </SwiperSlide>
                            </>
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Home;