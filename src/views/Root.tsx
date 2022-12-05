import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme/theme';
import { Wrapper } from './Root.styles';
import Dashboard from './Dashboard';
import MainTemplate from 'components/templates/MainTemplate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './Registration';
import { GlobalStyle } from 'assets/styles/global';
import UsersProvider from 'providers/UsersProvier';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <UsersProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <MainTemplate>
                    <Dashboard />
                  </MainTemplate>
                }
              />
              <Route path="/registration" element={<Registration />} />
            </Routes>
          </UsersProvider>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
