import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import "./index.scss";
import Routes from "./Routes";

const App = () => (
  <>
    <NavBar />
    <Routes />
    <ToastContainer />
  </>
);

export default App;
