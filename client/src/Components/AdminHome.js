import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import '../Components/AdminHome.css';
const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/contacts');
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchUsers();
    fetchContacts();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:5001/api/users/${userId}`);
      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleDeleteContact = async (contactId) => {
    try {
      await axios.delete(`http://localhost:5001/api/contacts/${contactId}`);
      setContacts(contacts.filter(contact => contact._id !== contactId));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <>
      <Header />
      <div className='admin-dashboard'>
        <h2>ADMIN DASHBOARD</h2>

        <h3>Users</h3>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Items</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  <ul>
                    {user.items.map((item, index) => (
                      <li key={index}>{item.name} - Rs.{item.price}</li>
                    ))}
                  </ul>
                </td>

                <td>
                  <button className='re'onClick={() => handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Contact Messages</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.address}</td>
                <td>{contact.desc}</td>
                <td>
                  <button className='re' onClick={() => handleDeleteContact(contact._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashboard;
