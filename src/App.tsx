import { Route, Routes } from "react-router-dom";
import Password from "./pages/Password";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Password />} />
    </Routes>
  );
}

export default App;
