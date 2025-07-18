/*
  React uses hot realoading, so anytime a change is saved, the running application reflects that
  JSX = Combination of JS and HTML
*/
import './App.css';
import MovieCard from './components/MovieCard';

//Component = Function in JavaScript that returns JSX code
//Components should start with a capital letter
function App() {
  return (
    //There needs to be a parent element (e.g., a <div>)
    //This is a fragment, which is great in situations where you don't want an actual parent element, but need to follow react structure
    <>
      <MovieCard movie={{title: "Tim's Film", release_date: "2024"}}/>
      <MovieCard movie={{title: "Joe's Film", release_date: "2024"}}/>
    </>
  )
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
