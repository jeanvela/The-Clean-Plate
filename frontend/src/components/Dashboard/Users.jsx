import React, { useEffect} from 'react';
import axios from 'axios';
import  {setFilteredUsers}  from '../../features/userSlice';
import { useSelector, useDispatch } from "react-redux";
import SideBar from './SideBar';

const UsersDashboard =  () => {
  const filteredUsers = useSelector((state) => state.user.filteredUsers);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/auth/");
        const users = response.data;
        const filterUsers = users
        dispatch(setFilteredUsers(filterUsers));
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  console.log(filteredUsers)


  const handleBlock = async(id) => {

    try {

      await axios.patch(`http://localhost:3001/auth/${id}`, {enable: false});
      const response = await axios.get("http://localhost:3001/auth/");
      const users = response.data;
      const filterUsers = users
      dispatch(setFilteredUsers(filterUsers));
      alert('User blocked')
     
    } catch (error) {
      console.error(error);
    }


  }

  const handleUnlock = async(id) => {

    try {

      await axios.patch(`http://localhost:3001/auth/${id}`, {enable: true});
      const response = await axios.get("http://localhost:3001/auth/");
      const users = response.data;
      const filterUsers = users
      dispatch(setFilteredUsers(filterUsers));
      alert('Unlocked user')
     
    } catch (error) {
      console.error(error);
    }


  }

  return (
    <div className="grid grid-cols-6">
      <SideBar/>
    <div className="grid space-x-2 grid-cols-3 col-span-5 gap-2 mt-5 mx-2 grid-rows-3">
      {filteredUsers && filteredUsers.map(u => (
        <div >
          <p>Username: {u.username}</p>
          <p>Roles: {u.roles.map(r => r.name)}</p>
          <button onClick={() => {handleBlock(u._id)}}>Block</button>
          <p></p>
          <button onClick={() => {handleUnlock(u._id)}}>Unlock</button>
          
        </div>
      ))}
    </div>
    </div>
  );
};

export default UsersDashboard;
