// // import logo from './logo.svg';
// import './App.css';
// // import MovieList from './components/MovieList';
// import SearchMovie from './components/SearchMovie';
// import AddMovieForm from './components/AddMovieForm';
// import CheckMovie from './components/CheckMovie';

// function App() {
//   return (
//     <div>
//       <h1>Movie App</h1>
//     {/* <MovieList></MovieList> */}
//    <AddMovieForm></AddMovieForm> 
//    <SearchMovie></SearchMovie>
//   <CheckMovie></CheckMovie>
//     </div>
//   );
// }

// export default App;




import React from 'react';
import './App.css';
import AddMovieForm from './components/AddMovieForm';
import SearchMovie from './components/SearchMovie';
import CheckMovie from './components/CheckMovie';
import AddTheatreForm from './components/AddTheatreForm';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Movie App</h1>
      </header>
      <main>
      <section>
          <AddTheatreForm />
        </section>
        <section>
          <AddMovieForm />
        </section>
        <section>
          <SearchMovie />
        </section>
        <section>
          <CheckMovie />
        </section>
        
      </main>
    </div>
  );
}

export default App;
