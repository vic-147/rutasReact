import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

function Menu() {
  const auth = useAuth();

  return (
    <nav>
      <ul>
        {routes.map((route) => {
          if (route.publicOnly && auth.user) return null;
          if (route.private && !auth.user) return null;
          return (
            <li key={route.to}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "red" : "white",
                })}
                to={route.to}
              >
                {route.page}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const routes = [];
routes.push({
  to: "/",
  page: "Home",
  private: false,
});
routes.push({
  to: "/blog",
  page: "Blog",
  private: false,
});
routes.push({
  to: "/profile",
  page: "Profile",
  private: true,
});
routes.push({
  to: "/login",
  page: "Login",
  private: false,
  publicOnly: true,
});
routes.push({
  to: "/logout",
  page: "Logout",
  private: true,
});

export default Menu;
