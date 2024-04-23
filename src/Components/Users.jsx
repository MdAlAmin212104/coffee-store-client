import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
      const loadedUsers = useLoaderData();
      const [users, setUsers] = useState(loadedUsers)

      const handleDeleteUsers = (id) => {
            console.log(id);
            fetch(`http://localhost:5000/users/${id}`, {
                  method: 'DELETE',
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              console.log("users deleted successfully");
                              const remainingUser = users.filter(user => user._id !== id);
                              setUsers(remainingUser);
                        }
                  })
      }


      return (
            <div>
                  <h2>Users here {loadedUsers.length}</h2>
                  <div className="overflow-x-auto">
                        <table className="table">
                        {/* head */}
                              <thead>
                                    <tr>
                                    <th></th>
                                    <th>Email</th>
                                    <th>Created At</th>
                                    <th>Action</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {/* row 1 */}
                                    
                                    {
                                          users.map(user =>
                                                <tr key={user._id}>
                                                      <th> {user._id}</th>
                                                      <td>{user.email}</td>
                                                      <td>{user.createdAt}</td>
                                                      <td onClick={()=>handleDeleteUsers(user._id)} className='btn my-2'>Deleted</td>
                                                </tr>
                                          )
                                    }
                                    
                              </tbody>
                        </table>
                  </div>
            </div>
      );
};

export default Users;