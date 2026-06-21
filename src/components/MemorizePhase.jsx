import { useEffect, useState } from 'react';

function MemorizePhase({ selectedDifficulty, correctOrder, onContinue, time, currentTheme }) {
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    setTimeLeft(time);
  }, [time]);

  useEffect(() => {
    if (timeLeft === 0) {
      onContinue();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onContinue]);

  return (
    <div className="relative w-full h-full min-h-[520px] flex items-center justify-center">
      <div className="absolute bottom-0 z-20">
        <img src={currentTheme.npc} alt="" className={currentTheme.npcClass} />
      </div>

      <div className="relative ml-72 bg-card-cream border-2 border-border-beige rounded-[35px] px-14 py-10 shadow-xl text-center max-w-xl">
        <p className="text-muted-text-brown tracking-[0.35em] mb-1"> Difficulty: {selectedDifficulty}</p>
         <p className="text-muted-text-brown !text-[16px] mb-6 "> Memorize the order before time runs out. </p>

        <h2 className="mb-6">Hi! My order is:</h2>
        <ul className="space-y-3">
          {correctOrder.map((item) => (
            <li key={item.name} className="flex items-center justify-center gap-3">
              <span>{item.name}</span>
              <div className={`w-10 h-10 rounded-full ${currentTheme.accentBg} border-2 border-border-beige flex items-center justify-center overflow-hidden`}>                
                <img src={item.image} alt={item.name} className="w-full h-full object-contain p-1" />
              </div>
            </li>
          ))}
        </ul>

        <div className="absolute left-[-42px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[26px] border-y-transparent border-r-[46px] border-r-border-beige"></div>
        <div className="absolute left-[-36px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[22px] border-y-transparent border-r-[40px] border-r-card-cream"></div>

        <div className="absolute -right-10 top-10 w-20 h-20 bg-bg-cream border-2 border-border-beige rounded-full flex items-center justify-center shadow-md">
          <p className="font-semibold">{timeLeft} s</p>
        </div>
      </div>
    </div>
  );
}

export default MemorizePhase;