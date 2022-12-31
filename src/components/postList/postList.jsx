import styles from './postList.module.css'
import Post from '../post/post'
import API from '../../api'
import { useState, useEffect } from 'react'
// import { Link } from "react-router-dom";

const PostList = () => {
    const [posts, setPosts] = useState([])
    const [searchToken, setSearchToken] = useState('')

    const example = () => {
        API.get(`/posts`)
        .then(res => {
            const data = res.data;
            setPosts(data);       
        })
    }

    const handleSearch = (e) => {
        setSearchToken(e.target.value)
    }


    return (
        <div className={styles.container}>
            <form className={styles.postForm}>
                <input type="text" name="title" placeholder='Поиск по названию' onChange={handleSearch} value={searchToken}/>
                <button>Поиск</button>
            </form> 

            <div className="posts">
                {posts.map( p => 
                    <Post key={p.id} post={p}/>
                )}
            </div>
        </div>
    )

}

export default PostList;



