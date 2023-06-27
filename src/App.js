import './App.css';
import Nav from  './components/Nav' ;
import Body from  './components/Body' ;
import React,{useEffect} from 'react'
function App() {

  useEffect(() => {
    const nav = document.querySelector('.App-header');

    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add("App-header--hidden");
      } else {
        nav.classList.remove("App-header--hidden");
      }
      lastScrollY = window.screenY;
    });

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="App">
     
      <body className="App-body">
        < Body/>
      </body>
 <header className="App-header">
        < Nav/>  
      </header> 
    </div>
  );
}

export default App;
