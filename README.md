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

![Home-and-Listing-Page_Desktop](https://github.com/nareshkumaralaria/pokedex-web-app/assets/57484597/16b67ccf-9601-4b85-a2c3-a877ad1eb7cc)
![Details-Page_Desktop](https://github.com/nareshkumaralaria/pokedex-web-app/assets/57484597/48fcce90-9057-4c42-acf9-fe20acd768eb)
![Bookmark-Page_Desktop](https://github.com/nareshkumaralaria/pokedex-web-app/assets/57484597/3603fcde-8e83-45ee-bef4-5c77237cfd83)

![Details-Page_Mobile](https://github.com/nareshkumaralaria/pokedex-web-app/assets/57484597/b852047d-8d33-4f1f-a3a3-f993c9d4aca4)
![Bookmark-Page_Mobile](https://github.com/nareshkumaralaria/pokedex-web-app/assets/57484597/94ab418b-c184-4e44-81d9-d8f3c380e1b3)
![Home-and-Listing-Page_Mobile](https://github.com/nareshkumaralaria/pokedex-web-app/assets/57484597/63d69540-3841-48f5-a574-77f9888b755a)

