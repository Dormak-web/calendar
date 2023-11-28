import React from 'react';
import {Route, Routes} from "react-router-dom";
import {globalStyles} from "styles/global";
import CalendarPage from "pages/CalendarPage";
import AuthPage from "pages/AuthPage";

function App() {
  globalStyles()
  return (
    <>
      <Routes>
        <Route path="/" element={<CalendarPage/>}/>
        <Route path="auth" element={<AuthPage/>}/>
      </Routes>
    </>
  );
}

export default App;
