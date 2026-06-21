import ThemedButton from './ThemedButton';

function Customize({ selectedDifficulty, setSelectedDifficulty, selectedTheme, setSelectedTheme, currentTheme, onBack }) {
  const difficulties = ['Easy', 'Medium', 'Hard'];
  const themes = ['Dessert Shop', 'Café'];

  return (
    <div className="w-[80%] bg-card-cream/95 border-4 border-border-beige rounded-[35px] p-8 shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div>
          <h2 className="text-center mb-6">Choose your difficulty</h2>

          <div className="flex flex-col gap-4">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`rounded-2xl px-6 py-4 text-left border-2 transition ${selectedDifficulty === difficulty ? `${currentTheme.selectedBg} ${currentTheme.primaryBorder}` : `${currentTheme.accentBg} border-border-beige`}`}>
                {difficulty}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-center mb-6">Choose your theme</h2>

          <div className="flex flex-col gap-4">
            {themes.map((theme) => (
              <button
                key={theme}
                onClick={() => setSelectedTheme(theme)}
                className={`rounded-2xl px-6 py-4 text-left border-2 transition ${selectedTheme === theme ? `${currentTheme.selectedBg} ${currentTheme.primaryBorder}` : `${currentTheme.accentBg} border-border-beige`}`}>
                {theme}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <ThemedButton onClick={onBack} currentTheme={currentTheme}>Back to Menu</ThemedButton>
      </div>
    </div>
  );
}

export default Customize;