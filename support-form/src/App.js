import React from "react";
import SupportForm from "./SupportForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/support">
      <Routes>
        <Route path="/" element={<SupportForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
