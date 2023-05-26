import React, {useContext, useEffect, useState} from 'react';
import {API__KEY} from "../../API";
import axios from "axios";
import {Link} from "react-router-dom";
import user from '../../img/user.png'
import {LanguageContext} from "../../context";

const ActorsMovies = ({actorsId}) => {
    const [movies, setMovies] = useState([])
    const {language} = useContext(LanguageContext)
    const getMovies= async (id,key)=>{
        axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=${language}`)
            .then((res)=>setMovies(res.data.cast))
    }
    useEffect(()=>{
        getMovies(actorsId,API__KEY)
    },[language])
    return (
            <div id='actorsMovies'>
                <div className="actorsMovies">
                    {
                        movies.map((el)=>(
                            <div className='actorsMovies--card'>
                                <Link to={`/movie/details/${el.id}`}>{
                                    el.poster_path ?  <img src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${el.poster_path}`} alt=""/> :
                                        <img src={user} alt=""/>
                                } </Link>
                                <h1>{el.title}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
    );
};

export default ActorsMovies;