import { useParams, useNavigate } from "react-router-dom";
import { blogData } from "./blogData";

function BlogPost() {
  const { slug } = useParams();
  const navigator = useNavigate();

  const blogpost = blogData.find((post) => post.slug === slug);

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
    </>
  );
}

export { BlogPost };
