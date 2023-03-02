import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Menu from "./Menu"
import BookingPage from "./BookingPage";
import Contact from "./Contact";
import Confirmation from "./Confirmation"


export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/reservation" element={<BookingPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}
