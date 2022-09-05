import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import  './styles/ActivityCard.css'
import { useState, useEffect } from "react";


function ActivityCard() {
    const [posts, setPosts] = useState()

    useEffect (() => {
        fetch('https://everglades-api.web.app/activity')
        .then(res => res.json())
        .then(data =>  {setPosts(data) 
            console.log(data)
        } )
        .catch((err) => console.log(err))
    }, [])
    
   
    
    
    return (
        <Card style={{ width: '18rem' }}>
          <>
          <Card.Body> 
            {posts && posts.map((post) => (
                <Card.Subtitle key={post._id}   className="mb-2 text-muted">{post.coordinates}</Card.Subtitle>
            ))}
            {posts && posts.map((post) => (
                <Card.Subtitle key={post._id}   className="mb-2 text-muted">{post.type}</Card.Subtitle>
            ))}
            {posts && posts.map((post) => (
                <Card.Subtitle key={post._id}   className="mb-2 text-muted">{post.description}</Card.Subtitle>
            ))}
          </Card.Body>
          </>
        </Card>
      );
    }
    
    
    export default ActivityCard;