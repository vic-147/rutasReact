import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, AuthRoute } from "./auth";
import HomePage from "./HomePage";
import { BlogPage } from "./BlogPage";
import ProfilePage from "./ProfilePage";
import Menu from "./Menu";
import { BlogPost } from "./BlogPost";
import LogoutPage from "./Logout";
import LoginPage from "./Login";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/logout"
              element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              }
            />
            <Route path="*" element={<p>Not Found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
