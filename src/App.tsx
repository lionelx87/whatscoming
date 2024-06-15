import "./App.css";
import { Footer, Header, Main } from "./components/layouts";

const App = () => {
  return (
    <div 
      className="
        h-screen 
        flex flex-col
        bg-[url('./assets/images/bg-dark-mobile.svg')] bg-cover bg-center bg-no-repeat 
        md:bg-[url('./assets/images/bg-dark-desktop.svg')]
      "
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
