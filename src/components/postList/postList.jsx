import styles from './postList.module.css'
import Post from '../post/post'
import React from 'react'
import axios from 'axios'

class PostList extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            searchToken: ''
        }
        this.handleSearch = this.handleSearch.bind(this)
    }
    
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
            const posts = res.data;
            this.setState({ posts });
        })
    }

    showDetails(e){
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
            const posts = res.data;
            this.setState({ posts });
        })
    }

    handleSearch(e) {
        console.log(typeof e.target.value, e.target.value);
        this.setState({searchToken: e.target.value})
    }

    render() {
        return (
            <div className={styles.container}>
                <form className={styles.postForm}>
                    <input type="text" name="title" placeholder='Поиск по названию' onChange={this.handleSearch} value={this.state.searchToken}/>
                    <button>Поиск</button>
                </form> 

                <div className="posts">
                    {this.state.posts.map( p => 
                        <Post key={p.id} post={p} />
                    )}
                </div>
            </div>
        )
    }
}

export default PostList;



