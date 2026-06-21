import CheckIcon from '@mui/icons-material/Check';
import ThemedButton from './ThemedButton';

function SelectPhase({ items, selectedItems, setSelectedItems, currentTheme, onSubmit }) {
    function toggleItem(item) {
      const isAlreadySelected = selectedItems.some(
        (selected) => selected.name === item.name
      );

      if (isAlreadySelected) {
        setSelectedItems(
          selectedItems.filter((selected) => selected.name !== item.name)
        );
      } else {
        setSelectedItems([...selectedItems, item]);
      }
    }

  const isMedium = items.length > 6 && items.length <= 8;
  const isHard = items.length > 8;

  return (
    <div className="w-[85%] bg-card-cream/90 border-4 border-border-beige rounded-[35px] px-7 py-5 shadow-xl text-center">
      <h2 className="mb-2 !text-[30px]"> Choose the right items </h2>

      <p className="text-muted-text-brown mb-3 !text-[21px]">Select the items the customer ordered from memory.</p>

      <div className={`mb-5 inline-block ${currentTheme.accentBg} border-2 border-border-beige rounded-2xl px-5 py-2`}>
        <p className="!text-[16px]">Selected: {selectedItems.length}</p>
      </div>

      <div className={`grid gap-3 mb-6 ${isHard ? 'grid-cols-5' : isMedium ? 'grid-cols-4' : 'grid-cols-3'}`}>
        {items.map((item) => {
          const isSelected = selectedItems.some((selected) => selected.name === item.name);

          return (
            <button
              key={item.name}
              onClick={() => toggleItem(item)}
              className={`relative bg-bg-cream border-2 rounded-3xl shadow-md transition hover:scale-105 flex flex-col items-center justify-center
                ${isHard ? 'px-2 py-2 gap-1' : isMedium ? 'px-3 py-3 gap-2' : 'px-4 py-4 gap-2'}
                ${isSelected ? `${currentTheme.selectedBg} ${currentTheme.buttonBorder}` : `border-border-beige ${currentTheme.hoverBg} ${currentTheme.hoverBorder}`} `} >
              {isSelected && (
                <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${currentTheme.selectedBg} border-2  ${currentTheme.buttonBorder} flex items-center justify-center`}>
                  <CheckIcon fontSize="small" />
                </div>
              )}

              <div className={`rounded-full ${currentTheme.accentBg} border-2 border-border-beige flex items-center justify-center overflow-hidden ${isHard ? 'w-10 h-10' : isMedium ? 'w-12 h-12' : 'w-14 h-14'}`}>
                <img src={item.image} alt={item.name} className="w-full h-full object-contain p-1"/>
              </div>

              <span className={`font-semibold text-center leading-tight ${isHard ? 'text-[15px]' : isMedium ? 'text-[18px]' : 'text-[22px]'}`}> {item.name} </span>
            </button>
          );
        })}
      </div>

      <ThemedButton onClick={onSubmit} disabled={selectedItems.length === 0} currentTheme={currentTheme}>Submit Order </ThemedButton>
    </div>
  );
}

export default SelectPhase;