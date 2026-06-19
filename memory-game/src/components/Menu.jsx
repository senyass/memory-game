function Menu({ onStart, onCustomize, onInstructions }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <button onClick={onStart} className="menu-button"> Start Baking </button>
      <button onClick={onCustomize} className="menu-button"> Customize </button>
      <button onClick={onInstructions} className="menu-button"> Instructions </button>
    </div>
  );
}

export default Menu;