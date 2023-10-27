function AddButton({ onAddClick }) {
  return <button
    style={{ margin: "10px", padding: "5px", color:"#00d775" }}
    onClick={onAddClick}>Add</button>;
}

export default AddButton;
