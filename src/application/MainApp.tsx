import React, { FC, useEffect, useState } from "react";
import "./MainApp.css";
import { fetchAllAnimals } from "./services/dataService";

const MainApp: FC = () => {
  const [animals, setAnimals] = useState<string[]>([]);
  useEffect(() => {
    getAnimals();
  }, []);

  const getAnimals = async () => {
    fetchAllAnimals().then(setAnimals);
  };

  console.log(animals);

  if (!animals.length) {
    return <div>No hay animales para mostrar</div>;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {React.Children.toArray(animals.map((animal) => <span>{animal}</span>))}
    </div>
  );
};

export default MainApp;
