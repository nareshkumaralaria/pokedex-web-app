// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

// ** Fetch pokemons url
export const fetchPokemons = createAsyncThunk('pokemon/fetchPokemons', async (nextPage, { dispatch }) => {
    const response = await axios.get(nextPage)
    const { results, next } = response.data

    dispatch(updateNextPage(next))
    await dispatch(fetchSinglePokemon(results))

    return results
})

// ** Fetch pokemons data
export const fetchSinglePokemon = createAsyncThunk('pokemon/fetchSinglePokemon', async (results, { dispatch }) => {

    dispatch(updateLoading(true))

    const pokemonPromises = results.map(async (element) => {
        const response = await axios.get(element.url);

        return response.data;
    });

    const allPokemon = await Promise.all(pokemonPromises);
    allPokemon.sort((a, b) => a.id > b.id ? 1 : -1);

    dispatch(updateLoading(false))

    return allPokemon
})

// ** Fetch Single pokemon data using name
export const fetchSinglePokemonDetail = createAsyncThunk('pokemon/fetchSinglePokemonDetail', async (name, { dispatch }) => {

    dispatch(updateLoading(true))

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        dispatch(updateLoading(false))

        return response.data
    } catch (error) {
        dispatch(updateLoading(false))

        return []
    }
})

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemonList: [],
        pokemonData: [],
        pokemon: [],
        nextPage: null,
        activeRoute: '/',
        loading: false
    },
    reducers: {
        updateActiveRoute: (state, action) => {
            state.activeRoute = action.payload
        },
        updateNextPage: (state, action) => {
            state.nextPage = action.payload
        },
        updateLoading: (state, action) => {
            state.loading = action.payload
        },
        removePokemon: state => {
            state.pokemon = []
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchPokemons.fulfilled, (state, action) => {
            state.pokemonList = [...state.pokemonList, ...action.payload]
        })
        builder.addCase(fetchSinglePokemon.fulfilled, (state, action) => {
            state.pokemonData = [...state.pokemonData, ...action.payload]
        })
        builder.addCase(fetchSinglePokemonDetail.fulfilled, (state, action) => {
            state.pokemon = action.payload
        })
    }
})

export const { updateActiveRoute, updateNextPage, updateLoading, removePokemon } = pokemonSlice.actions

export default pokemonSlice.reducer
