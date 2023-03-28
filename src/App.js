import { Contact } from "./components/contact";
import { Featured } from "./components/featured";
import { Header } from "./components/header";
import { NewArrival } from "./components/newArrival";
import { NewsLetter } from "./components/newsletter";
import './components/css/app.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Featured/>
      <NewArrival/>
      <NewsLetter/>
      <Contact/>
    </div>
  );
}

export default App;
