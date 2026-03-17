import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import "./index.css";
import Results from "./pages/Results";
import SavedBooks from "./pages/savedBooks";
import About from "./pages/About";
import { BooksProvider } from "./contexts/BookContext";

function App() {
  return (
    <BooksProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="results" element={<Results />}></Route>
          <Route path="savedBooks" element={<SavedBooks />}></Route>
          <Route path="about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </BooksProvider>
  );
}

export default App;
