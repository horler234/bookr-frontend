import { GlobalStyle } from "./components/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "./pages";
import Signin from "./pages/signin";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/signin" element={<Signin />} />
        {/* <Todos /> */}
      </Routes>
    </Router>
  );
}

export default App;
