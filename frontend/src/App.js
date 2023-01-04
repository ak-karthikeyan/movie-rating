import { } from "antd";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;

