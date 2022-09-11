import React, { useState, useEffect } from 'react'

function allUser() {

  
const[users, setUsers]=useState([])

const getUsersDetails = async () => {
    try {
        const response = await getUsers()
        setUsers(await response.data)
    } catch (error) {
        console.log('Error detected !' + error)
    }
}

useEffect(() =>
  {
    getUsersDetails()
  },[])

  const deleteUserData = async id => {
    await deleteUser(id)
    getUsersDetails()
}

  return (
    <>
            <div>
                <button> <Link to="/addUser"> AddUser </Link> </button>
            </div>
            <table>
                <tablehead>
                    <tr>
                        <th> ID </th>
                        <th> Name </th>
                    </tr>
                </tablehead>

                <tablebody>
                    {
                        users.map((user, index) => (
                            // intex is ID 
                            <tr key={index}>
                                <td> {index + 1} </td>
                                <td> {user.name} </td>    
                                <td>
                                    <Link to={`/edit/${user.id}`}> 
                                    <button> Edit </button> 
                                    </Link>
                                    <button onClick={() => deleteUserData(user.id)}> Delete </button>
                                </td>
                            </tr>
                        ))
                    }
                </tablebody>
            </table>
        </>
  )
}

export default allUser