import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [mode, setmode] = useState("light");
  const [modeText, setmodeText] = useState("Enable Dark Mode");
  const [buttonMode, setButtonMode] = useState("success");
  const [alert, setalert] = useState(null);
  function handleMode() {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgba(0, 0, 0, 0.814)";
      document.body.style.color = "white";
      setmodeText("Disable Dark Mode");
      setButtonMode("dark");
      setalert("Dark Mode Enabled");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setmodeText("Enable Dark Mode");
      setButtonMode("success");
      setalert("Dark Mode Disabled");
    }
  }
  setTimeout(() => {
    setalert(null);
  }, 1000);
  return (
    <>
      <Router>
        <Navbar
          title="Text-Utils"
          modehandle={handleMode}
          mode={mode}
          text={modeText}
        />
        <Alert text={alert} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<TextForm buttonMode={buttonMode} mode={mode} />}
            />
          </Routes>
        </div>
        <Footer mode={mode} />
      </Router>
    </>
  );
}

export default App;
