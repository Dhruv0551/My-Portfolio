import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
