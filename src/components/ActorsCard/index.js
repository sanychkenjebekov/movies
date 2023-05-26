import React, {useContext, useEffect, useState} from 'react';
import {API__KEY} from "../../API";
import axios from "axios";
import {Link} from "react-router-dom";
import Slider from "react-slick";
import user from '../../img/user.png'
import {LanguageContext} from "../../context";

const ActorsCard = ({id}) => {
    const [actors,setActors] = useState([])
    const {language} = useContext(LanguageContext)
    const getActors = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=${language}`)
            .then((res) => setActors(res.data.cast))
    }
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };
    useEffect(() => {
        getActors(API__KEY)
    },[language])
    return (
        <div id="actor">
            <div className="container">
                <h1>В главных ролях</h1>
                <div className="actor">
                    <Slider {...settings}>
                        {
                            actors.map((el) => (
                                <div className="actor--card">
                                    <Link to={`/actors/details/${el.id}`}>
                                        {
                                            el.profile_path ? <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt=""/> :
                                                <img src={user} width={140} alt="img"/>
                                        }
                                    </Link>
                                    <h3>{el.character}</h3>
                                    <h4>{el.name}</h4>
                                </div>
                            ))
                        }
                    </Slider>
                </div>

            </div>
        </div>
    );
};

export default ActorsCard;