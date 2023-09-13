import React, {useState, useEffect} from 'react'

import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  let [data, setData] = useState({
    email: null,
    password: null
})

let navigate = useNavigate()

const handleChange = (e) => {
        //let {name, type, value, checked, files} = e.target;
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data:", data)
    //API integration
    let user_detail = {
        result: {
            user:  {_id: 12, name: "rohan", email: "rohanmaharjan@gmail.com", password: "admin123", role:"admin"},
            token: "jwttoken",
            }
        };
    //local storage
    //5mb
    //string, no time limit
    localStorage.setItem("_ecomm_user", JSON.stringify(user_detail.result.user));
    localStorage.setItem("_ecomm_token", (user_detail.result.token))
    //sessionStorage.setItem("_ecomm_user", JSON.stringify(user_detail))

    //let local_store_user = localStorage.getItem('__ecomm_user');

    // localStorage.clear();
    // localStorage.removeItem("_ecomm_user")
    //cookie => a domain can have 50 cookie, every cookie size is generally 4096 characters
    //string can only be stored, certain time
    //if success = ?? dashboard / admin
    navigate("/"+user_detail.result.user.role)
}    

useEffect(()=> {
    let token = localStorage.getItem("_ecomm_token");
    // console.log( `token = `,token )
    // console.log( `token = `,typeof( token) )
    let user = JSON.parse(localStorage.getItem("_ecomm_user"));
    // console.log( `user = `,user )

    if(token){
        navigate("/"+ user.role)
    }
}, [])
  return (
    <>
      
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="form-control block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default LoginPage
