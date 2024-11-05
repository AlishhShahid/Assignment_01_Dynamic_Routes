import { CountryDetails } from "@/type/type";

const CountryName = ({ params }: { params: { country_name: string } }) => {
  const countryDetails: CountryDetails[] = [
        
        { name: 'Pakistan', capital: 'Islamabad', population: "220892340" },
        { name: 'Turkiye', capital: 'Ankara', population: "84339067" },
        { name: 'Qatar', capital: 'Doha', population: "2881060" },
        { name: 'Iraq', capital: 'Baghdad', population: "40222503" },
        { name: 'Yemen', capital: 'Sana\'a', population: "29825964" },
        { name: 'Oman', capital: 'Muscat', population: "5106626" },
    
    ];

    const country = countryDetails.find(c => c.name.toLowerCase().replace(' ', '_') === params.country_name.toLowerCase());
    return (
        <div>
          {country ? (
            <div>
              <h1>Country Name: {country.name}</h1>
              <h1>Capital: {country.capital}</h1>
              <h1>Population: {country.population.toLocaleString()}</h1>
            </div>
          ) : (
            <div>
              <h1>Country Not Found</h1>
            </div>
          )}
        </div>
      );
};

export default CountryName;
