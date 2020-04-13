import Container from "./Components/Main/Container/Container";
import MovieDetails from './Components/Main/MovieDetails/MovieDetails'
import Favorites from './Components/Main/Favorites/Favorites'
import NoPage from './Components/Layout/NoPageFound'
export const routes = {
    Home: {
        route: '/',
        component:Container
    },
    Favorites: {
        route: '/favorites',
        component:Favorites
    },
    MovieDetails: {
        route: '/details/:id',
        component:MovieDetails
    },
    noPage: {
        component: NoPage
    }
}