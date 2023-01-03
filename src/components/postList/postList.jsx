import styles from './postList.module.css'
import Post from '../post/post'
import API from '../../api'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const PostList = () => {
    const [posts, setPosts] = useState([])
    
    const [filteredPosts, setFilteredPosts] = useState([])
   
    const [searchToken, setSearchToken] = useState('')

    useEffect(() => {
        API.get(`posts`).then(resp => setPosts(resp.data))
    },[])

    useEffect(() => {
        setFilteredPosts(
            posts.filter(p => p.title.includes(searchToken))
           
        ) 
       
    },[searchToken, posts])

    const example = () => {
        API.get(`/posts`)
        .then(res => {
            const data = res.data;
            setPosts(data);       
        })
    }

    const handleSearch = (e) => {
        
    }


    return (
        <div className={styles.container}>
            <form className={styles.postForm}>
                <input type="text" name="title" placeholder='Поиск по названию' onChange={(e) => setSearchToken(e.target.value)} value={searchToken}/>
                <button>Поиск</button>
                
            </form> 

            <div className="posts">
                {filteredPosts ? filteredPosts.map( p => 
                    // <Post key={p.id} post={p}/>
                    <Link key={p.id} to={`/posts/${p.id}/comments`}>
                        {p.title}
                    </Link>
                )
                :
                <div>nothing</div>
            }
            </div>
        </div>
    )

}

export default PostList;



