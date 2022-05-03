import React, { useEffect, useState } from "react";

function App() {
  const [dogData, setDogData] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogData(data.message);
      });
  }, []);

  if (!dogData) return <p>Loading...</p>;

  return <img src={dogData} alt="A Random Dog" />;
}

export default App; // create your App component here
