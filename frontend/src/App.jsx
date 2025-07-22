/*
  React uses hot realoading, so anytime a change is saved, the running application reflects that
  JSX = Combination of JS and HTML
*/
import './css/App.css';
import Home from './pages/home';
import Favorites from './pages/favorites';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';

//Component = Function in JavaScript that returns JSX code
//Components should start with a capital letter
function App() {

  return (
    //There needs to be a parent element (e.g., a <div>)
    //<></> <---This is a fragment, which is great in situations where you don't want an actual parent element, but need to follow react structure
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

//To display a component in the application, you can include <COMPONENT_NAME /> in the App() function
//You can pass a {prop} (prop stands for property) into a component like any other function
/*function Text ({display}) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}*/

export default App
