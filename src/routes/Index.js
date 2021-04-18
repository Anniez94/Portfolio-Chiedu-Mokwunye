import React from "react"
import {Route, Switch} from "react-router-dom"
import Dashboard from "../components/dashboard/Dashboard"
import About from "../components/about/About"
import Footer from "../components/footer/Footer"
import Loader from "../components/landingPage/LandingPage"
import NotFound from "../components/notfound/Notfound"

const Routes = () => {
    return (
       <div>
           <Switch>
            <Route exact path="/about-me" component={About} />
           <Route exact path="/dashboard" component={Dashboard} />
           <Route exact path="/" component={Loader} />
           <Route component={NotFound} />
           </Switch>

           <Footer />
       </div>

    )
}

export default Routes