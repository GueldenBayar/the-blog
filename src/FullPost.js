import Map from "./Map";
import {useParams} from "react-router-dom";
import "./FullPost.css";


export default function FullPost({ posts }) {
  const { id } = useParams();
  const post = posts.filter((post) => post.sys.id === id);
  console.log(post);


return (
       <> 
       <section className="col-5">
            <div className="fullPost">
                <div style={{ textDecoration: 'none', color: 'white', fontStyle: "bold", fontWeight: "bold", fontStyle: "italic", fontSize: "xx-large", textAlign: "center" }}>
                    <img className="circle-img" src="https://www.liveabout.com/thmb/wvVhsu7tXYrZV664uVEPSc0b-44=/1413x1413/smart/filters:no_upscale()/114996552-57bb0f545f9b58cdfde2205e.jpg" />
                    <p>{post[0].fields.title}</p>
                </div> 
                <div className = "darkGreen" style={{ textDecoration: 'none', color: 'white',}}>
                    <p>Address: <br /> {post[0].fields.adress}</p>
                </div>                 
                <div className = "lightGreen">
                    <p>Popularity: <br /> {post[0].fields.popularity}</p>
                </div>
                <div className = "darkGreen" style={{ textDecoration: 'none', color: 'white',}}>
                    <p>Field conditions: <br /> {post[0].fields.conditions} not known</p>
                </div>
                <div className = "lightGreen">
                    <p>Food supply: <br /> {post[0].fields.supplies}</p>
                </div>
                <div className = "darkGreen1" style={{ textDecoration: 'none', color: 'white',}}>
                    <p>Description: <br /> {post[0].fields.description}</p>
                </div>
                
            </div>

            {/* // Content: e.g. list of four most recent entries in database */}
        </section>
        <section className="col-7">
            <Map posts={post}></Map>
        </section>
       </> 
    );
}

