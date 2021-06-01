import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ConfirmationPage from "./pages/ConfirmationPage";
import Entry from "./components/Entry.js";
import UserProvider from "./contexts/UserContext";
import Home from "./pages/home";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Navbar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/confirmation/:id" component={ConfirmationPage} />
          <Route exact path="/movies/:movieId" component={MoviePage} />
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
