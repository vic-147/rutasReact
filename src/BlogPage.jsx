import { Link, Outlet } from "react-router-dom";
import { blogData } from "./blogData";

function BlogPage() {
  return (
    <>
      <h1>Pagina de Blog</h1>
      <Outlet />
      <ul>
        {blogData.map((post) => (
          <BlogLink post={post} key={post.slug} />
        ))}
      </ul>
    </>
  );
}

function BlogLink({ post }) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
}

export { BlogPage };
