import React, { useState } from 'react';
import './Gallery.css';
import photosData from '../../src/data/photos';

const Gallery = () => {
  const [photos, setPhotos] = useState(photosData);
  const [searchTerm, setSearchTerm] = useState('');
  const [newPhoto, setNewPhoto] = useState({ title: '', description: '', url: '' });
  const [editingPhoto, setEditingPhoto] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = (id) => {
    setPhotos(photos.filter(photo => photo.id !== id));
  };

  const handleAdd = () => {
    setPhotos([...photos, { ...newPhoto, id: photos.length + 1 }]);
    setNewPhoto({ title: '', description: '', url: '' });
  };

  const handleUpdate = () => {
    setPhotos(photos.map(photo => photo.id === editingPhoto.id ? editingPhoto : photo));
    setEditingPhoto(null);
  };

  const handleEdit = (photo) => {
    setEditingPhoto(photo);
  };

  const filteredPhotos = photos.filter(photo => 
    photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    photo.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="gallery">
      <h1>Galería de Fotos</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Buscar fotos..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="add-photo">
        <h2>Añadir Foto</h2>
        <input
          type="text"
          placeholder="Título"
          value={newPhoto.title}
          onChange={(e) => setNewPhoto({ ...newPhoto, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={newPhoto.description}
          onChange={(e) => setNewPhoto({ ...newPhoto, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="URL de la Imagen"
          value={newPhoto.url}
          onChange={(e) => setNewPhoto({ ...newPhoto, url: e.target.value })}
        />
        <button onClick={handleAdd}>Añadir</button>
      </div>
      <div className="photo-list">
        {filteredPhotos.map(photo => (
          <div key={photo.id} className="photo-item">
            <img src={photo.url} alt={photo.title} />
            <h3>{photo.title}</h3>
            <p>{photo.description}</p>
            <button onClick={() => handleDelete(photo.id)}>Eliminar</button>
            <button onClick={() => handleEdit(photo)}>Editar</button>
          </div>
        ))}
      </div>
      {editingPhoto && (
        <div className="edit-photo">
          <h2>Editar Foto</h2>
          <input
            type="text"
            placeholder="Título"
            value={editingPhoto.title}
            onChange={(e) => setEditingPhoto({ ...editingPhoto, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Descripción"
            value={editingPhoto.description}
            onChange={(e) => setEditingPhoto({ ...editingPhoto, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="URL de la Imagen"
            value={editingPhoto.url}
            onChange={(e) => setEditingPhoto({ ...editingPhoto, url: e.target.value })}
          />
          <button onClick={handleUpdate}>Actualizar</button>
          <button onClick={() => setEditingPhoto(null)}>Cancelar</button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
