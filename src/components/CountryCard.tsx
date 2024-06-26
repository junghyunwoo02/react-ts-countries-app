import { Country } from "../types/types";

interface ownProps {
  country: Country;
}

const CountryCard: React.FC<ownProps> = ({ country }) => {
  return (
    <div className="cursor-pointer">
      <img className="w-20 h-auto mx-auto mb-4" src={`${country.flags.svg}`} />
      <h3 className="text-xl font-semibold mb-2">{country.name.common}</h3>
      <p className="text-gray-600">{country.capital}</p>
    </div>
  );
};

export default CountryCard;
