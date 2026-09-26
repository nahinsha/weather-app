import { useState } from "react";


function SearchBar({onSearch}) {
  const [text, setText] = useState("")

  function handleSubmit(event){
  event.preventDefault()
  onSearch(text)
  }

  return (
    <form
      className="group mx-auto w-full max-w-xl"
      onSubmit={handleSubmit}
    >
      {/* Outer Card */}
      <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-3 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl">

        <div className="flex items-center gap-3 rounded-[20px] bg-white px-2 py-2 shadow-xl transition-all duration-300 group-focus-within:scale-[1.01]">

          {/* Icon */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-black text-white transition-all duration-300 group-focus-within:rotate-12 group-focus-within:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.5-4.5m2.5-5.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
              />
            </svg>
          </div>

          {/* Input */}
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Search a city..."
            className="min-w-0 flex-1 bg-transparent px-2 text-base font-medium text-black outline-none placeholder:text-gray-400"
          />

          {/* Button */}
          <button
            type="submit"
            className="rounded-2xl bg-black px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-gray-800 hover:shadow-lg active:scale-95"
          >
            Go →
          </button>

        </div>

        {/* Bottom hint */}
        <div className="flex items-center justify-between px-2 pt-3">
          <span className="text-xs font-medium text-white/40 transition-colors duration-300 group-focus-within:text-white/60">
            Search by city
          </span>

          <span className="text-xs font-medium text-white/30">
            e.g. Dhaka
          </span>
        </div>

      </div>
    </form>
  );
}

export default SearchBar;


// input e kono city er name dile oi name ta ekta state e save korbo..then 
// oi state take weather API useWeather e pass korte pari (const [text, setText] = useState(""))
// ei state varibe(text) k input er moddhe tag korai dibo,jate input field er sathe amr state variabe er connection establieshed hoy
// real time e input field e jkhn kono data change korbo,tokh state variale tao update hoy
// onchange name er ekta eventlistner ache jeta input field e ki hocche real time eupdate dite thakbee
// onSubmit diye submit korar por ki hoibe seta bole dewa ....
// ar preventlistner dile without reloading data backend e chole jabe


//                              onSubmit,onChange


// return (
//     <form onSubmit={handleSubmit}>
//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Search City"
//       />

//       <button type="submit">Search</button>
//     </form>
//   );

// city name call korle j data ta dekhabe seta amra card.jsx componenet e likhbo0n 