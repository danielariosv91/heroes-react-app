import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

  const navigate = useNavigate(); 

  const handleLogin = () => {
      navigate('/marvel', {
          replace: true
      });
  } 

  return (
    <div>
      <h1>Login</h1>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}
