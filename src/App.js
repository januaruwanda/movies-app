
import './App.css';
import Text1 from './components/Text1';
import {Navbar, Container} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
        <Text1 />
          <Navbar.Brand href="#home">Movies App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
      
    </div>
    
  );
}

export default App;
