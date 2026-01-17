import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UserProfile from "./components/UserProfile";
import Login from "./pages/Login";
import { AuthProvider } from "./components/AuthContext";
import Dashboard from "./pages/Dashboard";
import CreateNotePage from "./pages/CreateNotePage";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Toaster position="top-right" reverseOrder={false} />

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <UserProfile>{(user) => <Dashboard user={user} />}</UserProfile>
            }
          />
          <Route
            path="/create-note"
            element={
              <UserProfile>
                {(user) => <CreateNotePage user={user} />}
              </UserProfile>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
