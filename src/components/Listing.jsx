// ** React Imports
import React, { useState } from 'react'

// ** Custom Styles Imports
import '../styles/listing.css'

// ** react-router-dom Imports
import { useNavigate } from 'react-router-dom'

// ** Custom Components Imports
import { Loading } from './index'

// ** Custom Utilities Functions Imports
import { capitalizeFirstLetter, isBookmarked } from '../utils/functions';

// ** Redux hooks Imports
import { useDispatch, useSelector } from 'react-redux';

// ** Imports from PokemonSlice
import { fetchPokemons } from '../store/pokemon';

// ** Third Party Import
import InfiniteScroll from 'react-infinite-scroll-component';

const Listing = () => {

    // ** react-router-dom hooks
    const navigate = useNavigate();

    // ** states
    const [bookmarks, setBookmarks] = useState(JSON.parse(localStorage.getItem("bookmarked")));

    // ** react-redux hooks
    const dispatch = useDispatch();

    // ** Redux States
    const { pokemonData, loading, nextPage } = useSelector(state => state.pokemon);

    // ** Redirecting to details page
    const handleDetailsPage = (pokemon) => {
        navigate(`/pokemon/${pokemon.name}`)
    }

    // ** Add or remove pokemon to bookmark tab
    const handleBookmark = (pokemon) => {
        const isBookmark = isBookmarked(pokemon.id, bookmarks);

        if (isBookmark === 'active') {
            const newBookmark = bookmarks.filter(item => item.id !== pokemon.id);
            localStorage.setItem("bookmarked", JSON.stringify(newBookmark))
            setBookmarks(newBookmark);
        } else {
            localStorage.setItem("bookmarked", JSON.stringify([...bookmarks, pokemon]))
            setBookmarks([...bookmarks, pokemon])
        }
    }

    return (
        <>
            <section className='listing-main'>
                <div className="listing">
                    <h2>Pokemons List</h2>
                    <div className='listing-section'>
                        <div className="listing-div">
                            {
                                <InfiniteScroll
                                    dataLength={pokemonData.length}
                                    next={() => dispatch(fetchPokemons(nextPage))}
                                    hasMore={!!nextPage}
                                    loader={<Loading />}
                                    endMessage={<p>No more Pokémon to load.</p>}
                                    className='listing-div'
                                >
                                    {
                                        pokemonData.map((pokemon, index) => {
                                            return <div key={pokemon.name + index} className="main-div">
                                                <p className='pokemon-id'>#{pokemon.id}</p>
                                                <img
                                                    src='/Bookmark.svg'
                                                    className={`bookmark ${isBookmarked(pokemon.id, bookmarks)}`}
                                                    onClick={() => handleBookmark(pokemon)}
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
                                </InfiniteScroll>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing