import React from 'react';

function TrackingModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <form>
        <label htmlFor="id">ID:</label>
        <input type="text" placeholder="ID" id="id" />
        <label htmlFor="laptop">Laptop ID:</label>
        <input type="text" placeholder="Laptop ID" id="laptop" />
        <label htmlFor="employee">Employee:</label>
        <input type="text" placeholder="Employee" id="employee" />
        <label htmlFor="exit">Exit Date:</label>
        <input type="date" id="exit" />
        <label htmlFor="return">Return Date:</label>
        <input type="text" id="return" />
        <label htmlFor="notes">Notes:</label>
        <input type="text" placeholder="Notes" id="notes" />
        <label htmlFor="created">Created at:</label>
        <input type="date" id="created" />
        <label htmlFor="updated">Return Date:</label>
        <input type="date" id="updated" />
        <button onClick={onClose}>Cerrar</button>
      </form>
    </div>
  );
}

export default TrackingModal;
