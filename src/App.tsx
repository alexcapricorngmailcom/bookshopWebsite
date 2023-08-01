import { Route } from 'react-router-dom';
import { Routes } from 'react-router';

import { Header } from "./shared/components/Header";
import { Home } from "./page-content/Home";
import { About } from './page-content/About';
import { Footer } from "./shared/components/Footer";

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;