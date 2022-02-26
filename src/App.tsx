import React from 'react';
import { BrowserRouter } from "react-router-dom";
import RenderRoutes from './routes';
import store from 'store';
import {Provider} from 'react-redux';
import {Provider as FluentProvider, teamsTheme, mergeThemes} from '@fluentui/react-northstar';
import { appTheme, customTeamsTheme } from "./styles/theme";
import {ThemeProvider} from 'styled-components';
import GlobalStyle from "./styles/globalStyle";
import './styles/styles.scss';

const App: React.FunctionComponent = () => (
  <Provider store={store}>
    <ThemeProvider theme={appTheme}>
      <FluentProvider theme={mergeThemes(teamsTheme, customTeamsTheme)}>
        <BrowserRouter>
          <GlobalStyle/>
          <RenderRoutes/>
        </BrowserRouter>
      </FluentProvider>
    </ThemeProvider>
  </Provider>
)

export default App
