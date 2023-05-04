import { useAuth } from "./auth";

function LogoutPage() {
  const auth = useAuth();

  const exit = (e) => {
    e.preventDefault();
    console.log("salir");
    auth.logout();
  };

  return (
    <>
      <h1>LogOut</h1>
      <form onSubmit={exit}>
        <label>Cerrar sesion</label>
        <button type="submit">Exit</button>
      </form>
    </>
  );
}

export default LogoutPage;
