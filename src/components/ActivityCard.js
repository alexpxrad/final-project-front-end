import React from "react";
//import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./styles/ActivityCard.css";
import { useState, useEffect } from "react";

function ActivityCard() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("https://everglades-api.web.app/activity")
    // fetch("'localhost:9000/activity'")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    // <div>
    //     {posts && posts.map((post) => (
    //         <ul>
    //         <li {... post._id}   className="mb-2 text-muted">{post.coordinates}</li>
    //         <li {... post._id}   className="mb-2 text-muted">{post.type}</li>
    //         <li {... post._id}   className="mb-2 text-muted">{post.description}</li>
    //         </ul>

    //     ))}

    //  </div>

    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {posts &&
        posts.map((post) => (
          <Card
            key={post._id}
            style={{
              width: "18rem",
              margin: "1rem",
              minWidth: "18rem",
              borderRadius: "5px",
              boxShadow: "5px 5px 5px lightGray",
            }}
          >
            <Card.Body>
              <Card.Title className="mb-2 text-muted">
                {post.coordinates}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {post.timestamp}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                {post.type}
              </Card.Subtitle>
              <Card.Text className="mb-2 text-muted">
                {post.description}
              </Card.Text>
              {post.type === "Human Activity" ? (
                <Card.Img
                  variant="top"
                  src="human.gif"
                  style={{ width: "50px", height: "50px" }}
                />
              ) : (
                ""
              )}
              {post.type === "Animal Activity" ? (
                <Card.Img
                  variant="top"
                  src="paws.gif"
                  style={{ width: "50px", height: "50px" }}
                />
              ) : (
                ""
              )}
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}

export default ActivityCard;