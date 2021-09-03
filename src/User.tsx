import React from 'react';
import {  useQuery } from 'react-query';
import { db } from './mocks/db';

 async function getUsers() {
   try {
     const data = await fetch(`http://localhost:8000/api/users`);
     if (!data.ok) {
       throw new Error(`${data.status}`);
     }
     const json = await data.json();
     return json;
   } catch (error) {
     console.log(error);
   }
 }

function User() {
  const { isLoading, data: users, error, refetch } = useQuery('users', getUsers);

  if (isLoading) {
    return <div>Loading Users...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleAddUser = () => {
      db.user.create();
      refetch();
  };

  const handleDeleteUser = (id: string) => async () => {
    await db.user.delete({
        where: {
            id: {
                equals: id
            }
        }
    });
    refetch();
  }

  return (

      <div >
          <div style={{position: 'fixed', left: '1rem'}}>
            <button onClick={handleAddUser}>Add New User</button>
            <div>Total Count: {users.length}</div>
          </div> 
        {users.map((u: any) => <li key={u.id}>{u.id} - {u.name} - {u.email} <button onClick={handleDeleteUser(u.id)}>Delete</button></li>)}
      </div>
  );
}

export default User;
