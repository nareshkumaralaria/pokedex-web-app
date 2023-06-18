// ** React Imports
import React from 'react'

// ** Custom Styles Imports
import '../styles/header.css'

// ** react-router-dom Imports
import { Link } from 'react-router-dom'

// ** Redux hooks Imports
import { useDispatch } from 'react-redux';

// ** Imports from PokemonSlice
import { updateActiveRoute } from '../store/pokemon';

const Header = () => {

    // ** react-redux hooks
    const dispatch = useDispatch();

    return (
        <section className='header-main'>
            <div className="header">
                <Link to="/" onClick={() => dispatch(updateActiveRoute('/'))}>
                    <div className="header-left">
                        <div className="header-img">
                            <img src="/Pokeball.svg" alt="" />
                        </div>
                        <p>Pokédex</p>
                    </div>
                </Link>

                <div className="header-right">
                    <a target='_blank' href="https://www.linkedin.com/in/nareshkumaralaria/">Linkedin</a>
                    <span>/</span>
                    <a target='_blank' href="https://github.com/nareshkumaralaria">Github</a>
                </div>

                <div className="header-right-icons">
                    <a target='_blank' href="https://www.linkedin.com/in/nareshkumaralaria/">
                        <img src="/Linkedin.svg" alt="" />
                    </a>
                    <span>/</span>
                    <a target='_blank' href="https://github.com/nareshkumaralaria">
                        <img src="/Github.svg" alt="" />
                    </a>
                </div>

            </div>
            <div className="divider"></div>
        </section>
    )
}

export default Header