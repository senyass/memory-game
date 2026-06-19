import { useState } from 'react';
import MemorizePhase from './MemorizePhase';
import SelectPhase from './SelectPhase';
import ResultsPhase from './ResultsPhase';
import { difficultySettings, themeItems } from "../data/gameData";

function Gameplay({ selectedDifficulty, selectedTheme, onBack }) {
  const [phase, setPhase] = useState('memorize');
  const [selectedItems, setSelectedItems] = useState([]);
  const [round, setRound] = useState(() =>
    generateRound(selectedDifficulty, selectedTheme)
  );

  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  function generateRound(difficulty, theme) {
    const settings = difficultySettings[difficulty];
    const availableItems = themeItems[theme];

    const shuffledItems = shuffleArray(availableItems);
    const correctOrder = shuffledItems.slice(0, settings.orderSize);

    const extraItems = shuffledItems
      .filter((item) => !correctOrder.includes(item))
      .slice(0, settings.displaySize - settings.orderSize);

    const items = shuffleArray([...correctOrder, ...extraItems]);

    return {
      correctOrder,
      items,
      time: settings.time,
    };
  }

  const correctCount = selectedItems.filter((item) =>
    round.correctOrder.includes(item)
  ).length;

  const accuracy =
    selectedItems.length === 0
      ? 0
      : Math.round((correctCount / selectedItems.length) * 100);

  function resetGame() {
    setSelectedItems([]);
    setRound(generateRound(selectedDifficulty, selectedTheme));
    setPhase('memorize');
  }

  return (
    <div className="w-full flex justify-center">
      {phase === 'memorize' && (
        <MemorizePhase
          selectedDifficulty={selectedDifficulty}
          correctOrder={round.correctOrder}
          time={round.time}
          onContinue={() => setPhase('select')}
        />
      )}

      {phase === 'select' && (
        <SelectPhase
          items={round.items}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          onSubmit={() => setPhase('results')}
        />
      )}

      {phase === 'results' && (
        <ResultsPhase
          correctOrder={round.correctOrder}
          selectedItems={selectedItems}
          correctCount={correctCount}
          accuracy={accuracy}
          onTryAgain={resetGame}
          onBack={onBack}
        />
      )}
    </div>
  );
}

export default Gameplay;