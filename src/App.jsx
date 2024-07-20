import './App.css';
import Navbar from './components/Narbar';
import ScrollToSection from './components/ScrollToSection';

function App() {
  return (
    <div className="items-center justify-center bg-white dark:bg-darkPrimary text-black dark:text-white">
      <Navbar />
      <ScrollToSection />
    </div>
  )
}

export default App
