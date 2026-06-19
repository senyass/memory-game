function Customize({selectedDifficulty,setSelectedDifficulty, selectedTheme, setSelectedTheme,onBack}) {
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
                className={`rounded-2xl px-6 py-4 text-left border-2 transition ${ selectedDifficulty === difficulty  ? 'bg-dessert-selected-blue border-dessert-pri-blue' : 'bg-dessert-sec-yellow border-border-beige'}`}>
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
                className={`rounded-2xl px-6 py-4 text-left border-2 transition ${
                  selectedTheme === theme  ? 'bg-dessert-selected-blue border-dessert-pri-blue'  : 'bg-dessert-sec-yellow border-border-beige' }`}  >
                {theme}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button onClick={onBack} className="menu-button">
          Back to Menu
        </button>
      </div>
    </div>
  );
}

export default Customize;