import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';
import About from './About';
import Skills from './Skills';
import ProjectsSection from './ProjectSection';
import Contact from './Contacts';
import Footer from './Footer';


function App() {
    return (
        <div className="App">

            <Header />
            <HeroSection />
            <About />
            
            
            <Skills />
            <ProjectsSection />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
