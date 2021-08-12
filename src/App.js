import logo from './logo.svg';
import './App.css';
import Simple from './Simple';
import Another from './Another';
import Onemore from './Onemore';
import Someprops from './Someprops';
import Goldengun from './Goldengun';
import Card from './Card';

function App() {
  
  return (
    <div className="App">
     <h1>News app built with React Hooks will go here!</h1>
     <Simple />
     <Another />
     <Onemore />
     <Someprops name="craw"/>
     <Goldengun weapon="golden" />
     <Card />
    </div>
  );
}

export default App;
