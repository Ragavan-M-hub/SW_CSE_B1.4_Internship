function UserList(){
    const user = [
        {id: 1, name: "hi", role: "student"},
        {id: 2, name: "hello", role: "teacher"},
        {id: 3, name: "bye", role: "manager"}
    ]

    return(
        <div className="list-box">
            <h3>User List</h3>
            <ul>
                {user.map((user)=>(
                    <li key={user.id}>
                        {user.name} is a {user.role}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList