import './App.css';
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import Text from "./components/Text/Text";
import Header from "./components/Header/Header";


function App() {
  return (
    <div>
      <Header/>
      <Button text='Click' btn='check'/>
        <Text text='Main page'/>
        <Footer />
    </div>
  );
}

export default App;
