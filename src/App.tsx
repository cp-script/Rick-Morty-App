import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";

import Characters from "src/pages/Characters";
import Character from "src/pages/Character";
import store from "src/store";

import { AppBar, Container, Toolbar, Typography } from "@mui/material";

function App() {
  const client = new ApolloClient({
    uri: process.env.REACT_APP_SERVER_URI,
    cache: new InMemoryCache(),
  });
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <AppBar position="fixed">
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link to="/">
                <Typography variant="h6">Rick and Morty App</Typography>
              </Link>
              <Link to="/">
                <Typography variant="h6">Characters</Typography>
              </Link>
            </Toolbar>
          </AppBar>
          <Container sx={{ pt: 12 }}>
            <Routes>
              <Route path="/" element={<Characters />} />
              <Route path="/:id" element={<Character />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
