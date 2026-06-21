import ThemedButton from './ThemedButton';

function Menu({ currentTheme, onStart, onCustomize, onInstructions }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <ThemedButton onClick={onStart} currentTheme={currentTheme}> Start Baking </ThemedButton>
      <ThemedButton onClick={onCustomize} currentTheme={currentTheme}>Customize</ThemedButton>
      <ThemedButton onClick={onInstructions} currentTheme={currentTheme}>Instructions</ThemedButton>
    </div>
  );
}

export default Menu;