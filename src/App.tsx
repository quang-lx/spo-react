import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from './routes';
import MainLayout from "./layouts/main";
import store from 'store';
import { Provider } from 'react-redux';
import { Provider as FluentProvider, teamsTheme } from '@fluentui/react-northstar';

const App : React.FunctionComponent = () => (
    <Provider store={store}>
        <FluentProvider theme={teamsTheme}>
            <BrowserRouter>
              <h1>Hello routes</h1>
              {/* <MainLayout> */}
                <Routes />
              {/* </MainLayout> */}
            </BrowserRouter>
        </FluentProvider>
    </Provider>
)

export default App
