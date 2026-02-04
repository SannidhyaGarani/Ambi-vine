import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
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
import Preloader from "./Components/Preloader";
import OurStory from "./pages/OrStory";
import OurVineyards from "./pages/OurVineyards";
import OurPeople from "./pages/OurPeople";
import WineDetail from "./pages/WineDetail.jsx";
import Wishlist from "./pages/Wishlist.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // ⏳ premium slow reveal

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wines/:category" element={<WinesByCategory />} />
        <Route path="/wine/:id" element={<WineDetail />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/stores" element={<OutletPage />} />
        <Route path="/book-tour" element={<TourPage />} />
        <Route path="/partner" element={<FranchisePage />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/our-vineyards" element={<OurVineyards />} />
        <Route path="/our-people" element={<OurPeople />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
