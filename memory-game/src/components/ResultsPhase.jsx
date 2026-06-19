import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function ResultsPhase({ correctOrder, selectedItems, correctCount, accuracy, onTryAgain, onBack }) {
  return (
    <div className="w-[70%] bg-card-cream/95 border-4 border-border-beige rounded-[35px] px-10 py-8 shadow-xl text-center">
      <h2 className="mb-3 !text-[36px]"> {accuracy === 100 ? 'Well done!' : 'Good try!'}</h2>

      <p className="text-muted-text-brown mb-6 !text-[20px]">You remembered {correctCount} out of {correctOrder.length} ordered items.</p>

      <ul className="space-y-2 mb-6">
        {correctOrder.map((item) => {
          const wasSelected = selectedItems.some((selected) => selected.name === item.name);

          return (
            <li key={item.name} className="flex items-center justify-center gap-2">
              {wasSelected ? <CheckIcon fontSize="small" /> : <CloseIcon fontSize="small" />}


              <span>{item.name}</span>
              <div className="w-10 h-10 rounded-full bg-dessert-sec-yellow border-2 border-border-beige flex items-center justify-center overflow-hidden">
                <img src={item.image}alt={item.name} className="w-full h-full object-contain p-1"/>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="border-t-2 border-border-beige my-6"></div>
      <h3 className="!text-[26px] mb-3">Memory Accuracy: {accuracy}%</h3>
      <p className="text-muted-text-brown mb-8 !text-[18px]">Keep practicing to maintain your memory skills.</p>
      <div className="space-x-5">
        <button onClick={onTryAgain} className="menu-button">Next Customer</button>
        <button onClick={onBack} className="menu-button">Go Home</button>
      </div>


    </div>
  );
}

export default ResultsPhase;