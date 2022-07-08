import Main from './components/Page/Main/Main';
import Container from './components/view/Container/Container';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/view/NavBar/NavBar';
import About from './components/Page/About/About';
import Projects from './components/Page/Projects/Projects';
import Contact from './components/Page/Contact/Contact';

function App() {
  return (
      <Container> 
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
  );
}

export default App;
