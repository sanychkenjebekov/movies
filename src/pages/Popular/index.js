import React, {useContext, useEffect, useState} from 'react';
import {LanguageContext} from "../../context";
import {API__KEY} from "../../API";
import axios from "axios";
import MovieCard from "../../components/MovieCard";

const Popular = () => {
    const [popular,setPopular] = useState([])
    const {language} = useContext(LanguageContext)


    const getPopular = (key) => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${page}`)
            .then((res) => setPopular(res.data.results))
    }

    const [page,setPage] = useState(1)
    useEffect(()=>{
        getPopular(API__KEY)
    },[page,language])
    return (
        <div id="popular">
            <div className="container">
                <div className="popular">
                    {
                        popular.map((el) => (
                            <MovieCard el={el}/>
                        ))
                    }
                </div>
                <div className='popular--btn'>
                    <button onClick={()=>setPage(page !== 1 ? page - 1 : 1)}>Prev</button>
                    <p>page: {page}</p>
                    <button onClick={()=>setPage(page + 1)}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Popular;