import { Routes, Route } from "react-router-dom";
import People from "components/people";

function App() {
  return (
    <Routes>
      <Route path="/" element={<People />} />
    </Routes>
  );
}

export default App;
