import Map from "./Map";

import { useParams } from "react-router-dom";
import "./FullPost.css";

export default function FullPost({ posts }) {
  const { id } = useParams();
  const post = posts.filter((post) => post.sys.id === id);
  console.log(post);

  return (
    <>
      <section className="col-5 content-container-custom">
        <div className="fullPost">
          <p>{post[0].fields.title}</p>
          <p>{post[0].fields.adress}</p>
          <p>{post[0].fields.conditions}</p>
          <p>{post[0].fields.popularity}</p>
          <p>{post[0].fields.supplies}</p>
          <p>{post[0].fields.description}</p>
          <p>{post[0].fields.description}</p>
          <p>{post[0].fields.description}</p>
        </div>

        {/* // Content: e.g. list of four most recent entries in database */}
      </section>
      <section className="col-7">
        <Map posts={post}></Map>
      </section>
    </>
  );
}
