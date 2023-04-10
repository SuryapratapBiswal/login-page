import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUserAsync } from '../App/userSlice'

const Home = () => {

  const [text, setText] = useState('')
  const { allUsers } = useSelector((state) => state.Users)
  const [users, setUsers] = useState({ allUsers })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUserAsync())
  }, [])
  console.log(users, "users:::::")

  // const handleSearchClick = () => {
  //   // debugger
  //   let result = allUsers.filter((user) => {
  //     console.log(user, "user")
  //     let filteredUser = []
  //     if (user?.email?.includes(text.toLocaleLowerCase())) {
  //       filteredUser = user
  //     }
  //     setUsers(filteredUser)
  //   })
  //   console.log(result[0].email, "result")
  // }

  console.log(text, "text")
  return (
    <>
      <div className="container-fluid d-flex justify-content-center ">
        <form className="d-flex w-75">
          <input
            className="form-control me-2 "
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

        </form>
        {/* <button className="btn btn-outline-success" onClick={handleSearchClick}>Search</button> */}
      </div>
      {text &&

        <div className='d-flex justify-content-center  '>
          <div className='bg-white w-75 mt-1'>
            {allUsers !== "token expired" ? allUsers.filter(user => user.email?.includes(text.toLowerCase())).map(user => (
              <li style={{ listStyle: "none", textAlign: "left", marginBottom: 10 }}>{user.email}</li>
            ))
              :
              alert("Please Log in agian")
            }
          </div>
        </div>
      }

    </>
  )
}

export default Home