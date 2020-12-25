import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CustomHooks from "./pages/CustomHookPage/index"
import HOCContainer from "./pages/HOCPage/index.jsx";


const RouterComponent = (props)=>{
    return(
        <Router>
          <Switch>
          <Route path="/" exact component={CustomHooks}/>
          <Route path="/hoc" exact component={HOCContainer}/>

          </Switch>
          
        </Router>
    )
}

export default RouterComponent;