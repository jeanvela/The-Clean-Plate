import React, { useEffect} from 'react';
import axios from 'axios';
import  {setFilteredUsers}  from '../../features/userSlice';
import { useSelector, useDispatch } from "react-redux";

const UsersDashboard =  () => {
  const filteredUsers = useSelector((state) => state.user.filteredUsers);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/auth/");
        const users = response.data;
        const filterUsers = users.filter(u => u.enable === true);
        dispatch(setFilteredUsers(filterUsers));
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  console.log(filteredUsers)

  return (
    <div>
      {filteredUsers && filteredUsers.map(u => (
        <div >
          <p>Username: {u.username}</p>
          <p>Roles: {u.roles.map(r => r.name)}</p>
          
        </div>
      ))}
    </div>
  );
};

export default UsersDashboard;
