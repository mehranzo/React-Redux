import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Spinner from "./spinner";

function App() {
  const [term, setTem] = useState("searching the post");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const search = async () => {
      const result = await axios.get(
        `https://techcrunch.com/wp-json/wp/v2/posts?search=${term}`
      );
      setPosts(result.data);
      setLoading(false);
    };

    if (term && !posts.length) {
      search();
    } else {
      setLoading(true);
      const timerId = setTimeout(search, 3000);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [term,posts.length]);
  console.log(posts);
  return (
    <div className="container mt-5">
      <div>
        <input
          type="text"
          className="form-control"
          value={term}
          onChange={(e) => setTem(e.target.value)}
        />
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <>
          {posts.length ? (
            <div class="row ">
              {posts.map((post) => (
                <div class=" mt-3 col-sm-6">
                  <div class="card " key={post.id} style={{ width: "18rem;" }}>
                    <img
                      class="card-img-top"
                      src={post.jetpack_featured_media_url}
                      alt="Techcrunch post pic"
                      style={{ width: "100%", height: "60vh" }}
                    />
                      
                    <div class="card-body">
                      <h5 class="card-title">{post.title.rendered}</h5>
                      <p class="card-text">
                        {post.primary_category.description}
                      </p>
                      <a href={post.link} class="btn btn-primary">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-danger">No posts found</p>
          )}
        </>
      )}
    </div>
  );
}
export default App;
