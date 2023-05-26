import React, {useContext, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {LanguageContext} from "../../context";
import logo from '../../img/logo.png'

const Header = () => {
    const [value,setValue] = useState('')
    const {setLanguage} = useContext(LanguageContext)
    const nav = useNavigate()
    const getValue = (e)=>{
        setValue(e.target.value)
    }
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <img src={logo} alt="img" width={120} />
                    <div className="header--nav">
                        <NavLink className="header--nav__item" to="/">Home</NavLink>
                        <NavLink className="header--nav__item" to="/popular">Popular</NavLink>
                        <NavLink className="header--nav__item" to="/topRated">TopRated</NavLink>
                    </div>
                    <div className="header--search">
                        <input onChange={getValue} type="text" placeholder="Поиск..."/>
                        <button onClick={()=> {
                            nav(`/movie/search/${value}`)
                        }}>search</button>
                    </div>
                    <select onChange={(e)=>setLanguage(e.target.value)}>
                        <option value="en-EU">English</option>
                        <option value="ru-RU">Русский</option>
                        <option value="fr-FR">France</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Header;