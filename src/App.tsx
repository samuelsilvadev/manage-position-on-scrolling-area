import { Routes, Route } from "react-router-dom";
import People from "components/people";
import Layout from "components/layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<People />} />
      </Routes>
    </Layout>
  );
}

export default App;
