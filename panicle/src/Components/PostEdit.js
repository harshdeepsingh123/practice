import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import BaseCard from "./BasicCard";
const PostEdit = () => {
  const { id } = useParams();
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [userid, setuserid] = useState("");
  const [comments, setcomments] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        settitle(res.data.title);
        setbody(res.data.body);
        setuserid(res.data.userid);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => {
        setcomments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{title}</h2>
      <p>{body}</p>
      <br></br>
      <div>
        <h4>comments</h4>
        <ul>
          {comments.map((val, key) => (
            <li key={key}>{val}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostEdit;
