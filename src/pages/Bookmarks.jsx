// ** React Imports
import React, { useEffect, useState } from 'react'

// ** react-router-dom Imports
import { useNavigate } from 'react-router-dom';

// ** Redux hooks Imports
import { useDispatch } from 'react-redux';

// ** Custom Components Imports
import { Header, Navigation, Search } from '../components'

// ** Custom Utilities Functions Imports
import { capitalizeFirstLetter } from '../utils/functions';

// ** Imports from PokemonSlice
import { updateActiveRoute } from '../store/pokemon';

const Bookmarks = () => {

    // ** react-router-dom hooks
    const navigate = useNavigate();

    // ** states
    const [bookmarks, setBookmarks] = useState(JSON.parse(localStorage.getItem("bookmarked")));

    // ** react-redux hooks
    const dispatch = useDispatch();

    // ** Remove pokemon to bookmark tab
    const handleBookmark = (id) => {
        const newBookmark = bookmarks.filter(item => item.id !== id);
        localStorage.setItem("bookmarked", JSON.stringify(newBookmark))
        setBookmarks(newBookmark);
    }

    // ** Redirecting to details page
    const handleDetailsPage = (pokemon) => {
        dispatch(updateActiveRoute(null))
        navigate(`/pokemon/${pokemon.id}`, { state: { pokemon } })
    }

    useEffect(() => {
        dispatch(updateActiveRoute('/pokemon/bookmarks'))
    }, [])

    return (
        <>
            <Header />
            <Search />
            <Navigation />
            <section className='listing-main'>
                <div className="listing">
                    <h2>Your Bookmarks</h2>
                    <div className='listing-section'>
                        <div className="listing-div">
                            {
                                bookmarks.length === 0 ? "No bookmarks" : null
                            }
                            {
                                bookmarks.map((pokemon, index) => {
                                    return <div key={pokemon.name + index} className="main-div">
                                        <p className='pokemon-id'>#{pokemon.id}</p>
                                        <img
                                            src='/Bookmark.svg'
                                            className='bookmark active'
                                            onClick={() => handleBookmark(pokemon.id)}
                                            alt=""
                                        />
                                        <div className="inside-div" onClick={() => handleDetailsPage(pokemon)}>
                                            <div className="img">
                                                <img src={pokemon.sprites.front_default} alt="" />
                                            </div>
                                            <div className="pokemon-info">
                                                <div style={{ display: "flex" }}>
                                                    <h4>Name : </h4><span>&nbsp;{capitalizeFirstLetter(pokemon.name)}</span>
                                                </div>
                                            </div>
                                            <div className="pokemon-info">
                                                <div style={{ display: "flex" }}>
                                                    <h4>weight : </h4><span>&nbsp;{pokemon.weight / 10} (Kg)</span>
                                                </div>
                                                <div style={{ display: "flex" }}>
                                                    <h4>height : </h4><span>&nbsp;{pokemon.height / 10} (m)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bookmarks