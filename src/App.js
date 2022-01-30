import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import './sass/style.scss';

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
