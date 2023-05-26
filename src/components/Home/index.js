import React from 'react';

const Home = () => {
    return (
        <div id='home'>
            <div className="container">
                <div className="home">
                    <h1>Фильмы, сериалы и многое другое без ограничений</h1>
                    <p className='p'>Смотрите где угодно. Отменить подписку можно в любое время.</p>
                    <p>Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить подписку.</p>
                    <div className="home--btn">
                        <input placeholder='Адрес электронной почты' type="email"/>
                        <button>Начать смотреть <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     className="Hawkins-Icon Hawkins-Icon-Standard"
                                                     data-name="ChevronRight">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z"
                                  fill="currentColor"></path>
                        </svg></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;