import { useParams, useNavigate } from "react-router-dom";
import { blogData } from "./blogData";
import { useAuth } from "./auth";

function BlogPost() {
  const { slug } = useParams();
  const navigator = useNavigate();
  const auth = useAuth();

  const blogpost = blogData.find((post) => post.slug === slug);

  // pueden eliminar
  const canDelete =
    auth.user?.isAdmin || blogpost.author === auth.user?.username;

  const returnBlog = () => {
    // navigator("/blog");
    // forma con variable especial
    navigator(-1);
  };

  return (
    <>
      <h1>Pagina de Blog</h1>
      <button onClick={returnBlog}>Volver al Blog</button>
      <h2>{blogpost.title}</h2>
      <i>{blogpost.author}</i>
      <p>{blogpost.content}</p>

      {canDelete && <button>Eliminar Post</button>}
    </>
  );
}

export { BlogPost };
