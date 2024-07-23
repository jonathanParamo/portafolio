import './App.css';
import Navbar from './components/Narbar';
import ScrollToSection from './components/ScrollToSection';
import { technologies } from './constants';
import TechnologyCard from './components/TechnologyCard';

function App() {
  return (
    <div className="items-center justify-center bg-white dark:bg-darkPrimary text-black dark:text-white">
      <Navbar />
      <ScrollToSection />
      <div className="flex flex-wrap justify-center mt-12 gap-4 p-2 md:p-6">
        {technologies.map(({name, icon}) => (
          <TechnologyCard key={name} name={name} icon={icon} />
        ))}
      </div>
    </div>
  )
}

export default App
