import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CorProvider } from "./context/CorContext";
import Main from "./pages/main";

function App() {
  return (
    <>
      <CorProvider>
        <Header />
        <Main />
        <Footer />
      </CorProvider>
    </>
  );
}

export default App;
