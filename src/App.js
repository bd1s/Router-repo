import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import './App.css';
import { Bconcepts } from "./Components/Bconcepts";
import { Bconfiguration } from "./Components/Bconfiguration";
import { Adnavigation } from "./Components/Adnavigation";
import { StartLearning } from "./Components/StartLearning";
import { Documentation } from "./Components/Documentation";
import { Exo } from "./Components/Exo";
import { Realisateurs } from "./Components/Realisateurs";
export default function App() {
  return (
<>
  <Navbar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/doc" element={<Documentation />} />
  <Route path="/exo" element={<Exo />} />
  <Route path="/realisateurs" element={<Realisateurs />} />


  <Route path="/bconcepts" element={<Bconcepts />} />
  <Route path="/bconfiguration" element={<Bconfiguration />} />
  <Route path="/adnavigation" element={<Adnavigation />} />
  <Route path="/Start" element={<StartLearning />} />
</Routes>
  
  
</>
  );
}



  
  