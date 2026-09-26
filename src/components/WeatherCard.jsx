
function WeatherCard({ data }) {
  return (
    <div className="mx-auto mt-6 w-full max-w-md rounded-3xl border border-gray-200 bg-white p-5 shadow-lg">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-gray-500">
            Current Weather
          </p>

          <h2 className="mt-1 text-2xl font-bold text-black">
            {data.city}
          </h2>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-2xl">
          ☀️
        </div>
      </div>

      {/* Temperature */}
      <div className="mt-5">
        <p className="text-5xl font-bold text-black">
          {data.temperature}
          <span className="text-2xl text-gray-500">°C</span>
        </p>

        <p className="mt-1 text-base font-medium text-gray-600">
          {data.condition}
        </p>
      </div>

      {/* Weather Details */}
      <div className="mt-5 grid grid-cols-2 gap-3">

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
          <p className="text-xs font-medium text-gray-500">
            Humidity
          </p>

          <p className="mt-1 text-lg font-bold text-black">
            {data.humidity}%
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
          <p className="text-xs font-medium text-gray-500">
            Wind Speed
          </p>

          <p className="mt-1 text-lg font-bold text-black">
            {data.windSpeed} m/s
          </p>
        </div>

      </div>

      {/* Signature */}
      <div className="mt-4 border-t border-gray-100 pt-3 text-center">
        <p className="text-[17px] font-medium text-gray-800">
          Nahin Shahariar😎
        </p>
      </div>

    </div>
  );
}

export default WeatherCard;








// function WeatherCard({data}){
//     return(
//         <div className="rounded-3xl bg-white p-6 shadow-md">
//             <h1 className="text-xl font-bold mb-4 text-blue-700">Weather Data </h1>
//             <h2 className="text-2xl font-semibold mb-2">City Name:{data.city}</h2>
//             <p className="text-2xl font-semibold mb-2">Weather Condition: {data.condition} </p>
//             <p className="text-2xl font-semibold mb-2">humidity: {data.humidity} </p>
//             <p className="text-2xl font-semibold mb-2">windSpeed: {data.windSpeed} </p>
//         </div>
//     )
// }

// export default WeatherCard;

//eita easy to understand






