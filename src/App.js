import React from "react";
import "./App.scss";
import routes from './routes';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        { routes }
      </main>
      <Footer />
    </div>
  );
}
