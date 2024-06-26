export interface Country {
  name: {
    common: string;
  };
  capital: string[];
  flags: {
    svg: string;
  };
}

export interface ExtendedCountry extends Country {
  isSelected: boolean;
}
