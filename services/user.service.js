import { users } from '../data/users.js';

export const getAllUsers = () => {
  return users;
};

export const getUserById = id => {
  return users.find(user => user.id === id);
};

export const createUser = (name, email) => {
  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    createdAt: new Date(),
  };
  users.push(newUser);
  return newUser;
};

export const updateUser = (id, name, email) => {
  const user = users.find(user => user.id === id);
  if (!user) {
    return null;
  }
  if (name) user.name = name;
  if (email) user.email = email;
  user.updatedAt = new Date();
  return user;
};

export const deleteUser = id => {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) {
    return false;
  }
  users.splice(index, 1);
  return true;
};
