import React from 'react';
import { Router } from "react-router-dom";
import Routes from './routes';
import { history } from 'helpers/common';
import store from 'store';
import { Provider } from 'react-redux';
import { Provider as FluentProvider, teamsTheme } from '@fluentui/react-northstar';

const App : React.FunctionComponent = () => (
    <Provider store={store}>
        <FluentProvider theme={teamsTheme}>
            <Router history={history}>
                <Routes />
            </Router>
        </FluentProvider>
    </Provider>
)

export default App
