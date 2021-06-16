import Map from "./Map";
import { useParams } from "react-router-dom";

export default function FullPost({ posts }) {
  const { id } = useParams();
  const post = posts.filter((post) => post.sys.id === id);
  console.log(post);

  return (
    <>
      <section className="col-5">
        <p>This is a full post for {post[0].fields.title}</p>
        {/* // Content: e.g. list of four most recent entries in database */}
      </section>
      {/* [post.fields.location.lat, post.fields.location.lon] */}
      <section className="col-7">
        <Map posts={post}></Map>
      </section>
    </>
  );
}
