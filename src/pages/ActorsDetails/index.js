import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {LanguageContext} from "../../context";
import {API__KEY} from "../../API";
import axios from "axios";
import user from '../../img/user.png'
import ActorsMovies from "../../components/ActorsMovies";

const ActorsDetails = () => {
    const [actors,setActors] = useState({})
    const {actorsId} = useParams()
    const {language} = useContext(LanguageContext)
    const getActors = (key)=>{
        axios(`https://api.themoviedb.org/3/person/${actorsId}?api_key=${key}&language=${language}`)
            .then((res)=>setActors(res.data))
    }
    useEffect(()=>{
        getActors(API__KEY)
    },[language])

        const {profile_path,name,biography,place_of_birth,birthday,popularity} = actors
    return (
        <div id="actorDetails">
            <div className="container">
                <div className="actorDetails">
                    {
                        profile_path ?  <img src={`https://www.themoviedb.org/t/p/w375_and_h375_face/${profile_path}`} alt=""/> :
                            <img src={user} alt=""/>
                    }

                    <div className="actorDetails--info">
                        <h1>{name}</h1>
                        {
                            biography?.length  === 0 ? null :
                                <div>
                                    <h2>Биография</h2>
                                    <h5>{biography?.slice(0,300)} <span>"Читать ещё..."</span></h5>
                                </div>
                        }
                        {
                            birthday + ''?.length === 0 ? null :
                                <div>
                                    <p>Дата рождения</p>
                                    <h3>{birthday}</h3>
                                </div>
                        }
                        {
                            place_of_birth + ''?.length === 0 ? null :
                                <div>
                                    <p>Место рождения</p>
                                    <h3>{place_of_birth}</h3>
                                </div>
                        }
                        <p>Популярноть</p>
                        <h3>{Math.round(popularity)}</h3>
                        <ActorsMovies actorsId={actorsId}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActorsDetails;