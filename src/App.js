import { useEffect, useState } from 'react';
import SearchForm from './components/SearchForm';
import UsersList from './components/UsersList';
import './App.css';

function App() {
  // const users = [{
  //   id: 29193677,
  //   name: 'Noor Asmar',
  //   avatar_url: 'https://avatars.githubusercontent.com/u/29193677?v=4',
  //   location: 'Palestine',
  //   bio: 'I am a Front End Developer, using React.js',
  //   public_repos: 10,
  //   followers: 10,
  //   following: 20,
  //   html_url: 'https://github.com/noorasmar'
  // },{
  //   id: 29194677,
  //   name: 'Noor Asmar',
  //   avatar_url: 'https://avatars.githubusercontent.com/u/29193677?v=4',
  //   location: 'Palestine',
  //   bio: 'I am a Front End Developer, using React.js',
  //   public_repos: 10,
  //   followers: 10,
  //   following: 20,
  //   html_url: 'https://github.com/noorasmar'
  // },{
  //   id: 29193877,
  //   name: 'Noor Asmar',
  //   avatar_url: 'https://avatars.githubusercontent.com/u/29193677?v=4',
  //   location: 'Palestine',
  //   bio: 'I am a Front End Developer, using React.js',
  //   public_repos: 10,
  //   followers: 10,
  //   following: 20,
  //   html_url: 'https://github.com/noorasmar'
  // }]

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(data => setUsers(data))
  },[])

  return (
    <div className="App">
      <h1>
        Github Users App
      </h1>
      <SearchForm />
      <UsersList users={users}/>
    </div>
  );
}

export default App;
