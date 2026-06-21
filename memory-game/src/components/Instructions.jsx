import ThemedButton from './ThemedButton';

function Instructions({ currentTheme, onBack }) {
  return (
    <div className="w-[80%] max-w-3xl bg-card-cream/95 border-4 border-border-beige rounded-[35px] p-10 shadow-xl text-center">
      <h2 className="mb-8">How to Play</h2>

      <div className="text-left space-y-5 text-text-brown">
        <p>1. Choose your difficulty and bakery theme.</p>
        <p>2. Memorize the customer's order before time runs out.</p>
        <p>3. Select the correct items from memory.</p>
        <p>4. Submit your order to see your accuracy.</p>
      </div>

      <div className="mt-10 flex justify-center">
        <ThemedButton onClick={onBack} currentTheme={currentTheme}>
          Back to Menu
        </ThemedButton>
      </div>
    </div>
  );
}

export default Instructions;