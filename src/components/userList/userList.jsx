import styles from './postList.module.css'
import Post from '../post/post'
import React from 'react'
import axios from 'axios'

class UserList extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
        }

    }
    
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const posts = res.data;
            this.setState({ posts });
        })
    }

    showDetails(e){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const users = res.data;
            this.setState({ users });
        })
    }

    render() {
        return (
            <div className={styles.container}>

                <div className="posts">
                    <ul>

                        {this.state.users.map( u => 
                            <li>{u.name}</li>
                        )}
                    </ul>

                </div>
            </div>
        )
    }
}

export default UserList;



