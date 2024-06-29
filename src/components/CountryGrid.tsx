import { ExtendedCountry } from "../types/types";
import CountryCard from "./CountryCard";

interface ownProps {
  countries: ExtendedCountry[];
  handleCountryClick: (country: ExtendedCountry) => void;
  title: string;
}

const CountryGrid: React.FC<ownProps> = ({
  countries,
  handleCountryClick,
  title,
}) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-8">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {countries.map((country) => (
          <div
            key={country.name.common}
            className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg"
            onClick={() => handleCountryClick(country)}
          >
            <CountryCard country={country} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CountryGrid;
