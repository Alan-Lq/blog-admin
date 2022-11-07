import client from "../../client"
import LoginForm from "./components/LoginForm"

function Login() {
   const handleLogin = async ({ login, password }) => {
      try {
         const response = await client.post('/auth/login', {
            login,
            password
         })
         localStorage.setItem('token', response.data.token)
         window.location.replace('/')
      } catch (e) {
         alert(e.response.data.message)
      }
   }


   return (
      <div
         style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
         }}>
         <LoginForm onSubmit={handleLogin} />
      </div>
   )
}

export default Login