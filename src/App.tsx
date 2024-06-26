import { useEffect, useState } from "react";
import { fetchCountry } from "./api/country.api";
import CountryList from "./components/CountryList";
import { Country } from "./types/types";

const App = () => {
  const [countries, setCountries] = useState<Country[]>([]); // 상태에 저장되는 데이터가 Country배열?

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCountry();
      setCountries(data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <CountryList countries={countries} />
    </div>
  );
};

export default App;
