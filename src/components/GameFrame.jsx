
function GameFrame({ children, currentTheme }) {

  return (
    <main className="min-h-screen bg-bg-cream flex flex-col items-center justify-center px-6 py-10 mt-5">
      <div className="h-32 flex items-center justify-center">
        <img src={currentTheme.logo} alt="Bakery Rush" className="h-70 object-contain z-10" />
      </div>

<div className="relative w-full max-w-6xl h-[700px] rounded-[35px] border-4 border-border-beige overflow-hidden shadow-xl">
         <img
            src={currentTheme.background}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

        <div className="absolute inset-0 bg-bg-cream/20"></div>

        <div className="relative z-10 h-full flex items-center justify-center"> {children} </div>
      </div>
    </main>
  );
}

export default GameFrame;