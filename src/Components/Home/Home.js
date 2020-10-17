import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Post from '../Post/Post';



const Home = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {

        const url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(response => response.json())
        .then(data => {

             setPosts(data);
        })
 
    }, [])


    const history = useHistory();
    const handleSeeMoreButton = (post) => {
        history.push(`/postdetail/${post.id}`)
        
    }

    return (
        
            <div className="home">
                {/* {
                    posts.map(post => <Post showSeeMoreButton={true} handleSeeMoreButton={handleSeeMoreButton} key={post.id} post={post}></Post>)
                } */}
            </div>
    );
};

export default Home;