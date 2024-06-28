import { useEffect, useState } from "react";
import { fetchCountries } from "./api/country.api";
import CountryList from "./components/CountryList";
import { ExtendedCountry } from "./types/types";
import FavoriteCountryList from "./components/FavoriteCountryList";

const App: React.FC = () => {
  const [countries, setCountries] = useState<ExtendedCountry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCountries();
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
      prevCountries.map((currentCountry) =>
        currentCountry.name.common === country.name.common
          ? { ...currentCountry, isSelected: !currentCountry.isSelected }
          : currentCountry
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
        <FavoriteCountryList
          selectedCountries={selectedCountries}
          handleCountryClick={handleCountryClick}
        />
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
