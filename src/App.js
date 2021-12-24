import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [userInfo, setUserInfo] = useState({
    user: '',
    rememberMe: false
  })

  useEffect(() => {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const user = rememberMe ? localStorage.getItem('user') : '';
    setUserInfo({ user, rememberMe });
  }, [])

  const handleChange = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;

    setUserInfo(prev => ({ ...prev, [input.name]: value }));
  };

  const handleFormSubmit = () => {
    const { user, rememberMe } = userInfo;
    localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('user', rememberMe ? user : '');};

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
      <label>
        User: <input name="user" value={userInfo.user} onChange={handleChange}/>
      </label>
      <label>
        <input name="rememberMe" checked={userInfo.rememberMe} onChange={handleChange} type="checkbox"/> Remember me
      </label>
      <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default App;
