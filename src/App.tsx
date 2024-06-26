import { useEffect, useState } from "react";
import { fetchCountry } from "./api/country.api";
import CountryList from "./components/CountryList";
import { Country } from "./types/types";
import CountryCard from "./components/CountryCard";

const App: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]); // 상태에 저장되는 데이터가 Country배열?
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCountry();
      setCountries(data);
    };

    fetchData();
  }, []);

  const handleCountryClick = (country: Country) => {
    if (selectedCountries.some((c) => c.name.common === country.name.common)) {
      setSelectedCountries((prevSelectedCountries) =>
        prevSelectedCountries.filter(
          (c) => c.name.common !== country.name.common
        )
      );
      setCountries((prevCountries) => [...prevCountries, country]);
    } else {
      setCountries((prevCountries) =>
        prevCountries.filter((c) => c.name.common !== country.name.common)
      );
      setSelectedCountries((prevSelectedCountries) => [
        ...prevSelectedCountries,
        country,
      ]);
    }
  };

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold text-center mt-12">
          Favorite Countries
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {selectedCountries.map((country) => (
            <div
              key={country.name.common}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg"
              onClick={() => handleCountryClick(country)}
            >
              <CountryCard country={country} />
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center mb-8">Countries</h1>
          <CountryList
            countries={countries}
            handleCountryClick={handleCountryClick}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
