import "./App.css";
import { Footer, Header, Main } from "./components/layouts";

const App = () => {
  return (
    <div 
      className="
        min-h-screen
        flex flex-col
        bg-[url('./assets/images/bg-light-mobile.svg')]
        dark:bg-[url('./assets/images/bg-dark-mobile.svg')] bg-cover bg-center bg-no-repeat 
        md:bg-[url('./assets/images/bg-light-desktop.svg')]
        md:dark:bg-[url('./assets/images/bg-dark-desktop.svg')]
        ease-in duration-300
      "
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
