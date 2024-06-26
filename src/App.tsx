import { useEffect, useState } from "react";
import { fetchCountry } from "./api/country.api";
import CountryList from "./components/CountryList";
import { ExtendedCountry } from "./types/types";
import CountryCard from "./components/CountryCard";

const App: React.FC = () => {
  const [countries, setCountries] = useState<ExtendedCountry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCountry();
      const extendedData = data.map((country) => ({
        ...country,
        isSelected: false,
      }));
      setCountries(extendedData);
    };

    fetchData();
  }, []);

  const handleCountryClick = (country: ExtendedCountry) => {
    setCountries((prevCountries) =>
      prevCountries.map((c) =>
        c.name.common === country.name.common
          ? { ...c, isSelected: !c.isSelected }
          : c
      )
    );
  };

  const selectedCountries = countries.filter((country) => country.isSelected);
  const unselectedCountries = countries.filter(
    (country) => !country.isSelected
  );

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
            countries={unselectedCountries}
            handleCountryClick={handleCountryClick}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
