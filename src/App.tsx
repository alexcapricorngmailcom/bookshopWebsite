import { Header } from "./shared/components/Header";
import { Home } from "./page-content/Home";
import { Footer } from "./shared/components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;