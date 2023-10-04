import { useEffect, useState } from "react";

export default function Api() {
  const [posts, setPosts] = useState([]);
  const [shownPosts, setShownPosts] = useState(4);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) {
          throw new Error("No data fetched");
        }

        const data = await res.json();

        setPosts(data);
      } catch (error) {
        console.log(error);
        setError("Error happened!");
      }
    }

    fetchData();
  }, []);

  const loadMore = function () {
    setShownPosts((previousValue) => previousValue + 5);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h3>POSTS</h3>
        {error !== "" ? <p>{error}</p> : ""}
        {posts.map((post, x) =>
          x <= shownPosts ? (
            <div key={x}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <button onClick={loadMore}>Load More</button>
    </div>
  );
}
