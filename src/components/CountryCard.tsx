import { Country } from "../types/types";

const CountryCard: React.FC<{ country: Country }> = ({ country }) => {
  return (
    <>
      <img className="w-20 h-auto mx-auto mb-4" src={`${country.flags.svg}`} />
      <h3 className="text-xl font-semibold mb-2">{country.name.common}</h3>
      <p className="text-gray-600">{country.capital}</p>
    </>
  );
};

export default CountryCard;
