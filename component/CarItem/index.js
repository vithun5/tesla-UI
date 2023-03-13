import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";
const CarItem = (props) => {
  const { name, tagline, image, taglineCTA } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '} 
          <Text style={styles.SubtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.button}>
        <StyledButton
          type={"primary"}
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom data");
          }}
        />
        <StyledButton
          type="secondary"
          content={"Existing inventory"}
          onPress={() => {
            console.warn("Existing inventory was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
