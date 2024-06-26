import axios from "axios";
import { Country } from "../types/types";

export const fetchCountry = async (): Promise<Country[]> => {
  try {
    const res = await axios.get<Country[]>(
      "https://restcountries.com/v3.1/all"
    );

    return res.data;
  } catch (err) {
    console.log(err);
    alert("데이터를 불러오는 중 오류가 발생했습니다.");
    return [];
  }
};
