import { Country } from "../types/types";
import CountryCard from "./CountryCard";

interface ownProps {
  countries: Country;
}

const CountryList: React.FC<ownProps> = ({ countries }) => {
  return (
    <ul>
      {countries.map((country) => (
        <div key={country.name.common}>
          <CountryCard country={country} />
        </div>
      ))}
    </ul>
  );
};

export default CountryList;
