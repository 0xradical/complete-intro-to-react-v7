import { useState } from "react";

const ANIMALS = ["cat", "bird", "dog", "reptile", "rabbit"];

const SearchParams = () => {
  // const location = "Florianopolis, SC";
  const [location, setLocation] = useState("Florianopolis, SC");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location {location}
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <button>Submit</button>
        </label>
        <label htmlFor="animal">
          Animal {animal}
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed();
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed();
            }}
          >
            <option />
            {ANIMALS.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed {breed}
          <select
            id="breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
