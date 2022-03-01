import { useEffect, useState } from 'react'

//Want to update list when we call api so useState
//[token] passed into useEffect so it can be called a second time.  Token passed into api.

export default function UserList({ token }) {
  const [userList, setUserList] = useState()
  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then((res) => res.json())
      .then((data) => setUserList(data.users))
      .catch(alert)
  }, [token])
  return (
    <>
      <h1>User List component</h1>;
      {!userList ? (
        <h2>Loading...</h2>
      ) : (
        userList.map((user) => {
          return (
            <p key={user.id}>
              {user.email}, {user.userRole}
            </p>
          )
        })
      )}
    </>
  )
}
