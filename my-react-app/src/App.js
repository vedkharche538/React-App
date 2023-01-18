import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title='ReactSite' firstheading='Home' secondheading='About Us' />
      <div className="container my-3">
        <Textform heading="Please add text to perform some provided actions:" />
      </div>
    </>
  );
}

export default App;
