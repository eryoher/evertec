import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from 'react-css-themr';
import contextTheme from './themes';
import AppRouter from './AppRouter'

import configureStore from './store';


type Props = {
  className?: string,
  disabled?: boolean
};

const store = configureStore();

class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={contextTheme}>
          <AppRouter/>
        </ThemeProvider>
      </Provider>
    );
  }
}
  
export default App;
