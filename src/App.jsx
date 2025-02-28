import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import DishMenu from "./components/dishmenu/Dishmenu";
import About from "./components/about/About";
import Page404 from "./components/page404/Page404";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="cont">
          <h1 className="title">Mazahua App</h1>
          <main className="cellphoneView">
            <Nav></Nav>
            <Routes>
              <Route path="/" element={<Navigate to="/inicio" replace />} />
              <Route path="/inicio" element={<Home></Home>} />
              <Route path="/menu" element={<DishMenu></DishMenu>} />
              <Route path="/historia" element={<About></About>} />
              <Route path="*" element={<Page404></Page404>} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
