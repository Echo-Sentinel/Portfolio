import { useState } from 'react';

export default function WishlistItem({ item, onRemove, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(item.name);

  const handleSave = () => {
    if (newText.trim()) {
      onUpdate({ ...item, name: newText });
      setIsEditing(false);
    }
  };

  return (
    <div>
      <h3>{isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        item.name
      )}</h3>
      <button onClick={() => onRemove(item.id)}>Remove</button>
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
}
