import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import WinesByCategory from "./Components/WinesByCategory";
import Header from "./components/Header";
import Footer from "./Components/Footer";
import OutletPage from "./pages/Store";
import TourPage from "./pages/Tour";
import FranchisePage from "./pages/Franchaise";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./Components/BackToTop";

function App() {
  return (
    <>
      <Header />

      <ScrollToTop /> {/* 👈 THIS fixes your issue */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wines/:category" element={<WinesByCategory />} />
        <Route path="/stores" element={<OutletPage />} />
        <Route path="/book-tour" element={<TourPage />} />
        <Route path="/partner" element={<FranchisePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
