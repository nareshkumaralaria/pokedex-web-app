// ** React Imports
import React from 'react';

// ** Custom Styles Imports
import '../styles/navigation.css';

// ** react-router-dom Imports
import { Link } from 'react-router-dom';

// ** Redux hooks Imports
import { useDispatch, useSelector } from 'react-redux';

// ** Imports from PokemonSlice
import { updateActiveRoute } from '../store/pokemon';

const Navigation = () => {

    // ** react-redux hooks
    const dispatch = useDispatch();

    // ** Redux States
    const { activeRoute } = useSelector(state => state.pokemon);

    return (
        <section className='navigation-main'>
            <div className="navigation">
                <ul>
                    <Link to="/" className={activeRoute === '/' ? 'active' : ''} onClick={() => dispatch(updateActiveRoute('/'))}>
                        <li>Home <img src='/Home.svg' /></li>
                    </Link>
                    <Link to="/pokemon/bookmarks" className={activeRoute === '/pokemon/bookmarks' ? 'active' : ''} onClick={() => dispatch(updateActiveRoute('/pokemon/bookmarks'))}>
                        <li>Bookmark <img src='/Bookmark.svg' /></li>
                    </Link>
                </ul>
            </div>
        </section>
    )
}

export default Navigation