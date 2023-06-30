import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import ProductsPage from "./ProductsPage";
import NotFoundPage from "./NotFoundPage";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
        </ul>
      </nav>

      <div className="content-container">
        {window.location.pathname === "/" && <HomePage />}
        {window.location.pathname === "/about" && <AboutPage />}
        {window.location.pathname === "/contact" && <ContactPage />}
        {window.location.pathname === "/products" && <ProductsPage />}
        {window.location.pathname !== "/" &&
          window.location.pathname !== "/about" &&
          window.location.pathname !== "/contact" &&
          window.location.pathname !== "/products" && <NotFoundPage />}
      </div>
    </div>
  );
};

export default App;
