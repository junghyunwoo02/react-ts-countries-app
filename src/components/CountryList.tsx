import { ExtendedCountry } from "../types/types";
import { useEffect, useState } from "react";
import { fetchCountries } from "../api/country.api";
import CountryGrid from "./CountryGrid";

const CountryList: React.FC = () => {
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
    <>
      <div className="bg-gray-200">
        <div className="container mx-auto p-6">
          <CountryGrid
            handleCountryClick={handleCountryClick}
            countries={selectedCountries}
            title="Favorite Countries"
          />
          <div>
            <CountryGrid
              handleCountryClick={handleCountryClick}
              countries={unselectedCountries}
              title="Countries"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryList;
