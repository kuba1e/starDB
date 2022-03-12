import { React, Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./app.css";

import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import { ErrorBoundry } from "../error-indicator";
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage,
} from "../pages";
import { PersonDetails, StarshipDetails } from "../sw-components";

export default class App extends Component {
  swapi = new SwapiService();

  state= {
    isLoggedIn: false
  }

  onLogin=()=>{
    this.setState({
      isLoggedIn:true
    })
  }

  render() {
    return (
      <div className="container">
        <ErrorBoundry>
          <SwapiServiceProvider value={this.swapi}>
            <Router>
              <Header />
              <RandomPlanet />
              <Switch>
                <Route path="/" render={() => <h2>Welcome</h2>} exact />
                <Route path="/people/" exact component={PeoplePage} />
                <Route path="/planets/:id?" exact component={PlanetsPage} />
                <Route path="/starships/" exact component={StarshipsPage} />
                <Route
                  path="/starships/:id"
                  render={({ match, location, history }) => {
                    return <StarshipDetails itemId={match.params.id} />;
                  }}
                />
                <Route
                  path="/people/:id"
                  render={({ match }) => {
                    return <PersonDetails itemId={match.params.id} />;
                  }}
                />
                <Route path="/login" exact render={()=><LoginPage isLoggedIn={this.state.isLoggedIn} onLogin={this.onLogin}/>} />
                <Route path="/secret-page" exact render={()=><SecretPage isLoggedIn={this.state.isLoggedIn}/>} />

                <Route render={()=>{
                  return <div>Page not found</div>
                }}/>
              </Switch>
            </Router>
          </SwapiServiceProvider>
        </ErrorBoundry>
      </div>
    );
  }
}
