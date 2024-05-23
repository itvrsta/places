import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [places, setPlaces] = useState([]);

  const getPlaces = async () => {
    const response = await fetch("https://dewalaravel.com/api/places");
    const placesData = await response.json();

    console.log(placesData);

  setPlaces(placesData);
};

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
     >
    {places.data ? (
      places.data.map((place, index) => (
        <View key={index}>
          <Text>{place.name}</Text>
        </View>
      ))
    ) : (
      <Text>Loading</Text>
    )}
  </View>
  );
}
