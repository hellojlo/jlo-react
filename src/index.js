import React from 'react';
import { render } from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App      from "./App";
import Home     from "./components/Home";
import Contact  from "./components/Contact";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
