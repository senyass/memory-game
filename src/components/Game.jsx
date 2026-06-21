import { useState } from 'react';
import GameFrame from '../components/GameFrame';
import Menu from '../components/Menu';
import Customize from '../components/Customize';
import Instructions from '../components/Instructions';
import Gameplay from '../components/Gameplay';
import { themeStyles } from '../data/themeStyles';

function Game() {
  const [screen, setScreen] = useState('menu');
  const [selectedDifficulty, setSelectedDifficulty] = useState('Easy');
  const [selectedTheme, setSelectedTheme] = useState('Dessert Shop');
  const currentTheme = themeStyles[selectedTheme];

  return (
    <GameFrame currentTheme={currentTheme}>
      {screen === 'menu' && (
        <Menu
          currentTheme={currentTheme}
          onStart={() => setScreen('gameplay')}
          onCustomize={() => setScreen('customize')}
          onInstructions={() => setScreen('instructions')}
        />
      )}

      {screen === 'customize' && (
        <Customize
          currentTheme={currentTheme}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
          onBack={() => setScreen('menu')}
        />
      )}

       {screen === 'instructions' && (
        <Instructions 
          currentTheme={currentTheme}
          onBack={() => setScreen('menu')} />
      )}

       {screen === 'gameplay' && (
        <Gameplay
          selectedDifficulty={selectedDifficulty}
          selectedTheme={selectedTheme}
          currentTheme={currentTheme}
          onBack={() => setScreen('menu')}
        />
      )}
    </GameFrame>
  );
}

export default Game;