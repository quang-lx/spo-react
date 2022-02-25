import React from 'react';
import { BrowserRouter } from "react-router-dom";
import RenderRoutes from './routes';
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
        <BrowserRouter>
          <GlobalStyle/>
          <RenderRoutes/>
        </BrowserRouter>
      </FluentProvider>
    </ThemeProvider>
  </Provider>
)

export default App
