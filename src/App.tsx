import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
