import About from "./pages/about/about";
import NotFound from "./pages/errors/404";
import Home from "./pages/home/home";


export const routes = [

    {
        path: '/',
        element: <Home/>
    }, 
    
    {
        path: '/apropos',
        element: <About/>
    },
    {
        path: '*',
        element: <NotFound/>
    }



];

