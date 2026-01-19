import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { ImageGallery } from "./components/ImageGallery";
import { Contacte } from "./components/Contacte";
import { Header } from "./components/NavBar";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/imatges" element={<ImageGallery />}></Route>
            <Route path="/contacte" element={<Contacte />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
