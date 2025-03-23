import { useState, useEffect } from "react";
import PostCards from "./PostCards";

const PostApi = () => {
  const [listOfPosts, setListOfPosts] = useState([]);

  const fetchData = async () => {
    try {
      const URl = "https://jsonplaceholder.typicode.com/posts";
      const fetchURl = await fetch(URl);
      const data = await fetchURl.json();
      setListOfPosts(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="post-container">
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Body</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {listOfPosts.map((post, index) => (
            <PostCards key={post?.id} postData={post} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostApi;
