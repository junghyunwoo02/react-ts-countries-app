const CountryCard = ({ country }) => {
  return (
    <>
      <div>
        <img src={`${country.flags.png}`} />
        <h3>{country.name.common}</h3>
        <p>{country.capital}</p>
      </div>
    </>
  );
};

export default CountryCard;
