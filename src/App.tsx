import React from 'react';
import {Router} from "react-router-dom";
import Routes from './routes';
import MainLayout from "./layouts/Main";
import {history} from 'helpers/common';
import store from 'store';
import {Provider} from 'react-redux';
import {Provider as FluentProvider, teamsTheme} from '@fluentui/react-northstar';
import appTheme from "./styles/theme";
import {ThemeProvider} from 'styled-components';
import GlobalStyle from "./styles/globalStyle";
import './styles/styles.scss';

const App: React.FunctionComponent = () => (
  <Provider store={store}>
    <ThemeProvider theme={appTheme}>
      <FluentProvider theme={teamsTheme}>
        <Router history={history}>
          <MainLayout>
            <GlobalStyle/>
            <Routes/>
          </MainLayout>
        </Router>
      </FluentProvider>
    </ThemeProvider>
  </Provider>
)

export default App
