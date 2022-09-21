import React from 'react';
import { BrowserRouter } from "react-router-dom";
import RenderRoutes from './routes';
import store from 'store';
import {Provider} from 'react-redux';
import {Provider as FluentProvider} from '@fluentui/react-northstar';
import { theme } from "./styles/theme";
import {ThemeProvider} from 'styled-components';
import GlobalStyle from "./styles/globalStyle";
import './styles/styles.scss';

const App: React.FunctionComponent = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <FluentProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle/>
          <RenderRoutes/>
        </BrowserRouter>
      </FluentProvider>
    </ThemeProvider>
  </Provider>
)

export default App
