import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <Shop />
        <Introduction />
        <About />
        <Footer />
    </div>
  );
}

export default App;