import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API__KEY} from "../../API";
import {LanguageContext} from "../../context";

const Index = ({id}) => {
    const [movie, setMovie] = useState([])
    const {language} = useContext(LanguageContext)

    const getMovie = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=${language}`)
            .then((res) => {
                setMovie(res.data.results)
            })
    }
    useEffect(() => {
        getMovie(API__KEY)
    }, [language])
    return (
        <div id="movie">
            <div className="container">
                <div className="movie">
                    {
                        movie.map((el) => (
                            <div className="movie--card">
                                <iframe width="600" height="506" src={`https://www.youtube.com/embed/${el.key}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Index;