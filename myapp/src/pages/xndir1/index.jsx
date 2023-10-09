import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css"

export const Xndir1 = () => {
  const [loading, setLoading] = useState(true); 
  const [comments, setComments] = useState([]);

  const getComments = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setComments(response.data);
        setLoading(false);
      })
      
  };
//   console.log(comments)
    useEffect(() => {
     getComments();
    }, []);

  return <div>
      {loading ? (
        <p>Loading.....</p>
      ) : (
        <div>
          {comments.map((comment) => (
            <div key={comment.id} className="comment-boxes">
              <h6>{comment.name}</h6>
              <p>{comment.email}</p>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
};

