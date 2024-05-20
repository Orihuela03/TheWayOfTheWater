// UserForm.jsx
import React, { useState, useEffect } from 'react';
import { createUser, readUsers, updateUser, deleteUser } from '../../models/firebase/crudOperations';

const UserForm = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ nombre: '', apellidos: '', telefono: '' });
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await readUsers();
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId) {
      await updateUser(currentId, formData);
      setCurrentId(null);
    } else {
      await createUser(formData);
    }
    const usersData = await readUsers();
    setUsers(usersData);
    setFormData({ nombre: '', apellidos: '', telefono: '' });
  };

  const handleEdit = (user) => {
    setFormData({ nombre: user.nombre, apellidos: user.apellidos, telefono: user.telefono });
    setCurrentId(user.id);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    const usersData = await readUsers();
    setUsers(usersData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" required />
        <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} placeholder="Apellidos" required />
        <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Teléfono" required />
        <button type="submit">{currentId ? 'Actualizar' : 'Agregar'}</button>
      </form>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.nombre} {user.apellidos} - {user.telefono}
            <button onClick={() => handleEdit(user)}>Editar</button>
            <button onClick={() => handleDelete(user.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserForm;