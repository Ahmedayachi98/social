import axios from "axios";
import {useEffect, useState} from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

export default function Feed({username}) {
  const [posts,setPosts] = useState([])

  useEffect(()=> {
    const fatchPosts = async () =>{
      const res =username ?
      await axios.get("posts/profile/"+username):
      await axios.get("posts/timeline/6248b117842b28e4d50d8adc");
      setPosts(res.data)
    }
    fatchPosts();
  },[username]);


  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}