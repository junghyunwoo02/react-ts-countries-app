import { ExtendedCountry } from "../types/types";
import CountryCard from "./CountryCard";

interface ownProps {
  selectedCountries: ExtendedCountry[];
  handleCountryClick: (country: ExtendedCountry) => void;
}

const FavoriteCountryList: React.FC<ownProps> = ({
  selectedCountries,
  handleCountryClick,
}) => {
  return (
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
  );
};

export default FavoriteCountryList;