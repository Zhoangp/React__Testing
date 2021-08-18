import Home from './Views/Home/index'
import React, { Component } from 'react';
import Result from './Views/Result/index'
import {connect} from 'react-redux'
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/result" component={Result}/>
      <Route exact path="/" component={Home} />
      </Switch>
      </BrowserRouter>

  );
  }
}
const mapStateToProps = (state) => {
  return {
    mark: state.Answers.mark
  }
}
export default connect(mapStateToProps, null)(App);
