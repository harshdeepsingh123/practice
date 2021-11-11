import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import PostEdit from "./Components/PostEdit";
import {
  BrowserRouter,
  Route,
  Routes,
  Switch,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/posts/:id" element={<PostEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
