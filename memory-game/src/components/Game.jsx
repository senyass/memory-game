import { useState } from 'react';
import GameFrame from '../components/GameFrame';
import Menu from '../components/Menu';
import Customize from '../components/Customize';
import Instructions from '../components/Instructions';
import Gameplay from '../components/Gameplay';

function Game() {
  const [screen, setScreen] = useState('menu');
  const [selectedDifficulty, setSelectedDifficulty] = useState('Easy');
  const [selectedTheme, setSelectedTheme] = useState('Dessert Shop');

  return (
    <GameFrame>
      {screen === 'menu' && (
        <Menu
          onStart={() => setScreen('gameplay')}
          onCustomize={() => setScreen('customize')}
          onInstructions={() => setScreen('instructions')}
        />
      )}

      {screen === 'customize' && (
        <Customize
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
          onBack={() => setScreen('menu')}
        />
      )}

       {screen === 'instructions' && (
        <Instructions onBack={() => setScreen('menu')} />
      )}

       {screen === 'gameplay' && (
        <Gameplay
          selectedDifficulty={selectedDifficulty}
          selectedTheme={selectedTheme}
          onBack={() => setScreen('menu')}
        />
      )}
    </GameFrame>
  );
}

export default Game;