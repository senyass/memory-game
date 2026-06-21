function ThemedButton({ children, onClick, disabled = false, currentTheme }) {
  return (
    <button onClick={onClick} disabled={disabled} className={`w-72 bg-card-cream text-text-brown border-2 border-border-beige rounded-2xl px-8 py-4 shadow-md transition font-semibold hover:scale-105 ${currentTheme.buttonHoverBg} ${currentTheme.buttonHoverBorder} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      {children}
    </button>
  );
}

export default ThemedButton;