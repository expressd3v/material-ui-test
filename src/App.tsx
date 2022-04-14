import React, {FC, Fragment} from 'react';
import { Routes, Route } from 'react-router-dom';
import {Provider} from "react-redux";
import {createTheme, ThemeProvider} from "@mui/material";
import lightThemeOptions from "./utils/theme/light";
import Layout from "./layouts/layout";
import GlobalStyles from "./components/style/global";
import HomePage from './pages/home';
import { store } from './redux/store';

const lightTheme = createTheme(lightThemeOptions)

const App: FC = () => {

    return (
        <Fragment>
            <Provider store={store}>
                <ThemeProvider theme={lightTheme}>
                    <GlobalStyles/>
                    <Layout>
                        <Routes>
                            <Route path={'/'} element={<HomePage/>}/>
                        </Routes>
                    </Layout>
                </ThemeProvider>
            </Provider>
        </Fragment>
    );
};

export default App;