import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Cources from "./Pages/Cources";
import Home from "./Pages/Home"
import Services from "./Pages/Services";

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/texnopark_site" element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route path="/texnopark_site/service" element={<Services/>} />
          <Route path="/texnopark_site/courses" element={<Cources/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);