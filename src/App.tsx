import { Header } from "./shared/components/Header";
import { Home } from "./page-content/Home";
import { Footer } from "./shared/components/Footer";

function App() {
  return (
    <div className="App">
      <header><Header /></header>
      <Home />
      <footer><Footer /></footer>
    </div>
  );
}

export default App;
