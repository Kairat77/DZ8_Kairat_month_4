import styles from '../postList/postList.module.css'
import { useState, useEffect } from 'react'
import API from '../../api'


const UserList = () => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        API.get(`/users`)
        .then(res => {
            const data = res.data;
            setUsers(data);
        })
    }, [])


    return (
        <div className={styles.container}>

            <div className="posts">
                <ul>

                    {users.map( u => 
                        <li>{u.name}</li>
                    )}
                </ul>

            </div>
        </div>
    )

}

export default UserList;



