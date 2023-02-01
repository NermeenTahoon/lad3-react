import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
export default function MyForm({onValChange ,getPasswordValues}) {
  let {id} = useParams();
  const [row, setRow] = useState([])
  const [formVlue, setFormVlue] = useState({
    name: "",
    password: "",
    email:""
  });

  const [error, setErorr] = useState({
    name: null,
    password: null
  })
  useEffect(() => {
    console.log(row)

  }, [row])

  const getFormValue = (e) => {
    if (e.target.name === "name" &&e.target.value.length == 0  ) {
      setErorr({
        ...error,
        username: "user name is required",
      });
    } else if (e.target.name == "name" &&e.target.value.length <= 3  ) {
      setErorr({
        ...error,
        username: "user name must be more than 3",
      });
    }else if (e.target.name == "password"&&e.target.value.length == 0  ) {
      setErorr({
        ...error,
        password: "password must be required",
      });
    }else if (e.target.name == "password"&&e.target.value.length <= 4  ) {
      setErorr({
        ...error,
        password: "password must be more than for 4",
      });
    }else {

      setErorr({
        ...error,
        name: null,
        password: null
      });
      setFormVlue({
        ...formVlue,
        [e.target.name]: e.target.value,
      })
    }


  }
  
  const addStudent = () => {
     if (formVlue.username.length == 0  ) {
      setErorr({
        ...error,
        username: "user name is required",
      });}

      else if (formVlue.username.length <= 3  ) {
        setErorr({
          ...error,
          username: "user name must be more than 3",
        });
      }else if (formVlue.password.length == 0  ) {
        setErorr({
          ...error,
          password: "password must be required",
        });
      }else if (formVlue.password.length <= 4  ) {
        setErorr({
          ...error,
          password: "password must be more than for 4",
        });
      }
    else{
      setErorr({
        ...error,
        username: null,
        password: null
      });

      setRow([
        ...row,
        {username:formVlue.username, password:formVlue.password}
      ]
      )}    
   }
   return (
    <div className="bg-light p-3 text-light col-6 m-auto mt-3">
        <h2 className=" text-dark text-center mb-4"> Login</h2>
        <div className="container p-5">
            <div className="row g-4">
                <input
                 type="text"
                 name="username"
                 placeholder="Enter Your Name"
                 onChange={onValChange}
                 className={`form-control ${error.username ? "red" : "green"}`}
                />
                {error.username && <p className="text-danger">{error.username}</p>}

                <input
                 type="text"
                 name="password"
                 placeholder="Enter Your Password"
                 className={`form-control ${error.password ? "red" : "green"}`}
                 onChange={getPasswordValues}

                />
                {error.password && <p className="text-danger">{error.password}</p>} 
                
                <button className="btn btn-warning mt-4"
                onClick={addStudent}>Add Student
                </button>
              </div>
            </div>
        <div className="row mt-5">

          <table className='bg-dark text-light'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Password</th></tr>
            </thead>
            <tbody>

              {
                row.map((item,i) => {
                return (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td>{item.username}</td>
                    <td>{item.password}</td>
                  </tr>)
              })
              }
            </tbody>
          </table>
        </div>
      </div>
  )
}