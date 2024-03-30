import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Layout from "./Components/Layout"
import { ContextProvider } from "./Components/utils/global.context";


function App() {
  return (
    <BrowserRouter>
    <ContextProvider>
    <Routes>
      <Route element={<Layout/>}>

        <Route path="/" element={<Home/>} />
        <Route path="/contacto" element={<Contact/>} />
        <Route path="/dentista/:id" element={<Detail/>} />
        <Route path="/favs" element={<Favs/>} />

      </Route>
    </Routes>
    </ContextProvider>
    </BrowserRouter>      

  );
}

export default App;
