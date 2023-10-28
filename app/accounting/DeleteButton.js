function DeleteButton({ onClick }) {
  return (
    <button style={{ fontSize: "20px", padding:"5px", borderRadius:"10px"}} onClick={onClick}>
      Delete!
    </button>
  );
}

export default DeleteButton;
