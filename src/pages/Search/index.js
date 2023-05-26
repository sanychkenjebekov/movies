import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {LanguageContext} from "../../context";
import axios from "axios";
import {API__KEY} from "../../API";
import MovieCard from "../../components/MovieCard";

const Search = () => {
    const [search,setSearch] =useState([])
    const {searchName} = useParams()
    const {language} = useContext(LanguageContext)
    const getSearch = (key)=>{
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchName}&language=${language}`)
            .then((res)=>setSearch(res.data.results))
    }
    useEffect(()=>{
        getSearch(API__KEY)
    },[searchName,language])
    return (
        <div id="popular">
            <div className="container">
                <div className="popular">
                    {
                        search.map((el) => (
                            <MovieCard el={el}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;