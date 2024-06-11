import "./App.css";
import { Header, Main } from "./components/layouts";

const App = () => {
  return (
    <div 
      className="
        h-screen 
        bg-[url('./assets/images/bg-mobile-main.svg')] bg-cover bg-center bg-no-repeat 
        md:bg-[url('./assets/images/bg-desktop-main.svg')]
      "
    >
      <Header />
      <Main />
    </div>
  );
};

export default App;
