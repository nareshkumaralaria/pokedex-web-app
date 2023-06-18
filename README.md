# Pokédex Web App
This is a Pokédex web application built using ReactJS, Redux Toolkit, and Axios. It allows users to search and browse Pokémon data fetched from the [PokeAPI](https://pokeapi.co/). The app features a search page, a listing page with infinite scrolling, a details page for each Pokémon, and a bookmarks screen.

## Live Link

[https://pokedex-flurn.netlify.app/](https://pokedex-flurn.netlify.app/)

## Features

- **Search Page :** Users can search for Pokémon by name. The app makes an API call to retrieve the Pokémon data and displays loading indicators and error messages as needed. 

- **Listing Page :** Displays a list of Pokémon fetched from the API. The page supports infinite scrolling, loading more Pokémon as the user scrolls.

- **Details Page :** Shows detailed information about a selected Pokémon, including its abilities, types, stats, and more. Users can bookmark a Pokémon and save it as a favorite on their device. Bookmarked Pokémon can be easily identified and removed from bookmarks.

- **Bookmarks Screen :** Allows users to view all their bookmarked Pokémon. The data is stored locally on the user's device, and users can remove Pokémon from their bookmarks.


## Technologies Used

- ReactJS
- Redux Toolkit (for state management)
- Axios (for API calls)
- React Infinite Scroll Component (for infinite scrolling functionality)
- React Redux (for integrating Redux with React)
- React Router DOM (for routing within the app)
- React Tabs (for tab-based navigation)


## Getting Started

- Clone the repository to your local machine:
```bash
git clone https://github.com/nareshkumaralaria/pokedex-web-app.git

```

- Navigate to the project directory:
```bash
cd pokedex-web-app

```

- Install the dependencies:
```bash
npm install

```

- Start the development server:
```bash
npm run dev

```

- Open the app in your browser: http://localhost:5173/


## API Integration

This app integrates with the [PokeAPI](https://pokeapi.co/) to fetch Pokémon data. The API base URL is https://pokeapi.co/api/v2. The following endpoints are used:

- **/pokemon :** Retrieves a list of all Pokémon. (by default 20 limit)

- **/pokemon/{name} :** Fetches detailed information about a specific Pokémon.


## Authors

- [@nareshkumaralaria](https://github.com/nareshkumaralaria) (Naresh Kumar)


## Screenshots