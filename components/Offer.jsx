
export default function Offer() {
  return (
    <main className="flex w-full h-[50vh] flex-col rounded-md items-center justify-center z-10 px-10">
      <h3 className="font-semibold text-gray-600 text-xl py-2">PROVIDING SERVICE</h3>
      <h2 className="font-bold text-gray-800 text-3xl pt-4 pb-12">What Can I Do for You</h2>
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col w-64 justify-center items-center">
          <div className="w-16 h-16 bg-black flex"></div>
          <div className="text-xl py-4 font-semibold">Offer Title</div>
          <div className="text-center text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi vero</div>
        </div>
        <div className="flex flex-col w-64 justify-center items-center">
          <div className="w-16 h-16 bg-black flex"></div>
          <div className="text-xl py-4 font-semibold">Offer Title</div>
          <div className="text-center text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi vero</div>
        </div>
        <div className="flex flex-col w-64 justify-center items-center">
          <div className="w-16 h-16 bg-black flex"></div>
          <div className="text-xl py-4 font-semibold">Offer Title</div>
          <div className="text-center text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi vero</div>
        </div>
      </div>
    </main>
  );
}