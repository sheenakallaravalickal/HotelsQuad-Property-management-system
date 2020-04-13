import React from 'react';
import Routes from 'containers/__Routes/Loadable';

import { Helmet } from 'react-helmet';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import GlobalStyle from '../../global-styles';

import './style.scss';

const theme = createMuiTheme();

const App = props => (
  <MuiThemeProvider theme={theme}>
    <GlobalStyle />
    <Helmet defaultTitle="HotelsQuad" />
    <Routes />
    <ToastContainer position="top-center" />
  </MuiThemeProvider>
);
export default App;
