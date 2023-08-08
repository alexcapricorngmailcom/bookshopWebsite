import { Route, Routes } from 'react-router-dom';

import { Header } from "./shared/components/Header";
import { Home } from "./page-content/Home";
import { MyStore } from './page-content/MyStore';
import { MyStoreSingleProduct } from './page-content/MyStoreSingleProduct';
import { About } from './page-content/About';
import { Contact } from './page-content/Contact';
import { Error404 } from './page-content/Error404';
import { Footer } from "./shared/components/Footer";

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/mystore" element={<MyStore />} />
          <Route path="/singleproduct" element={<MyStoreSingleProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;