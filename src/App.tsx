import { Routes, Route } from "react-router-dom";
import People from "pages/people";
import RegisterPerson from "pages/register-person";
import Layout from "components/layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<People />} />
        <Route path="/create" element={<RegisterPerson />} />
      </Routes>
    </Layout>
  );
}

export default App;
