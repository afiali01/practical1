import homePage from "../pages/home";
import todoPage from "..//pages/todoPage";
import deletePage from "../pages/delete/delete";
import notFound from "../pages/notFound";
import editPage from "../pages/edit/edit";
import addPage from "../pages/add/add";

const routes = {
    "/": homePage,
    "/todopage": todoPage,
    "/deletepage": deletePage,
    "/editpage": editPage,
    "/addpage": addPage
}

const Router =  function (pathname, params=null)   {
    const isValidRoute = Object.keys(routes).find(key => key===pathname)
    
     // check the pathname agains the router object
     // if path is valid display the component page
     // if not display the not found page.

    // loading and unloading pages into the div app
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    

        // app.appendChild(routes[window.location.pathname]())
        if(isValidRoute === undefined){
            app.appendChild(notFound())
        }
        else{
            app.append(routes[window.location.pathname](params))
            //app.append(routes[isValidRoute]())
        }
}

export default Router