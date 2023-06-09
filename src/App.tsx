import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { AuthProvider } from "./auth/AuthContext";
import { UserProfile } from "./components/userprofile/UserProfile";
import { AuthRouter } from "./auth/AuthRouter";

function App() {
  return (
    <>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <AuthRouter>
                  <UserProfile />
                </AuthRouter>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </>
  );
}

export default App;
