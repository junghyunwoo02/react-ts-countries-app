import { Country } from "../types/types";
import CountryCard from "./CountryCard";

interface ownProps {
  countries: Country[];
}

const CountryList: React.FC<ownProps> = ({ countries }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {countries.map((country) => (
        <div
          key={country.name.common}
          className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg"
        >
          <CountryCard country={country} />
        </div>
      ))}
    </div>
  );
};

export default CountryList;
