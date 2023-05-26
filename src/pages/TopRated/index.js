import React, {useContext, useEffect, useState} from 'react';
import {LanguageContext} from "../../context";
import axios from "axios";
import {API__KEY} from "../../API";
import MovieCard from "../../components/MovieCard";

const TopRated = () => {
    const [topRated, setTopRated] = useState([])
    const {language} = useContext(LanguageContext)


    const getTopRated = (key) => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=1`)
            .then((res) => {
                setTopRated(res.data.results)
            })
    }
    useEffect(() => {
        getTopRated(API__KEY)
    },[])
    return (
        <div id="popular">
            <div className="container">
                <div className="popular">
                    {
                        topRated.map((el) => (
                            <MovieCard el={el}/>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default TopRated;