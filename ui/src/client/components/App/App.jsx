import React, { Component } from 'react';
import { hot } from 'react-hot-loader'; // this should only be done in the top level App component
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  onClick() {
    this.setState(state => ({ counter: state.counter + 1 }));
  }

  render() {
    const { counter } = this.state;

    return (
      <div className={styles.app}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <div>
                  Home
                  <Link to="/test">Test</Link>
                  <button type="button" onClick={() => this.onClick()}>
                    {counter}
                  </button>
                </div>
              )}
            />
            <Route exact path="/test" component={() => <div>Test</div>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default hot(module)(App);
