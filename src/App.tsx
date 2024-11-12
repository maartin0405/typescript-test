

import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

const getUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/user');

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return [];
  }
};

function App() {

  useEffect(() => {
    getUsers().then(users => console.log(users));
  }, []);

  return (
    <div>
      <h1>Users</h1>

      {users.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>

      ))}
    </div>
  );
}

export default App;
