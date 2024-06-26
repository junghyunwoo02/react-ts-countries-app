import { useEffect, useState } from "react";
import { fetchCountry } from "./api/country.api";
import CountryList from "./components/CountryList";
import { Country } from "./types/types";

const App = () => {
  const [countries, setCountries] = useState<Country[]>([]); // 상태에 저장되는 데이터가 Country배열?

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCountry();
      setCountries(data);
    };

    fetchData();
  }, []);
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold text-center mt-12">
          Favorite Countries
        </h2>
        <div>
          <h1 className="text-3xl font-bold text-center mb-8">Countries</h1>
          <CountryList countries={countries} />
        </div>
      </div>
    </div>
  );
};

export default App;
