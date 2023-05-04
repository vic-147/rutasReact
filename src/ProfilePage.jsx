import { useAuth } from "./auth";

function ProfilePage() {
  const auth = useAuth();

  const estilo = {
    "color": "tomato" 
  }
  console.log(auth.user.username);
  return (
    <>
    <h1>Perfile de usuario</h1>
    <p>Welcomr!, <span style={estilo}>{auth.user.username}</span></p>
    </>
  );
}

export default ProfilePage;