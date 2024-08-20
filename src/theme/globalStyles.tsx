import i18next from "../languages/i18n";
import { StyleSheet } from "react-native";

export const changeDirection = (direction:string) => {
  GlobalStyles = getGlobalStyles(direction);
  i18next.dir(direction);
};


const getGlobalStyles = (direction: string) => {
  console.log("direction", direction);
  
  return StyleSheet.create({
    setFlexDirectionToNormal: {
      flexDirection: "row",
    },

    setFlexDirectionToRtl: {
      flexDirection: direction === "ltr" ? "row" : "row-reverse",
    },

    setTextAlignDirection: {
      textAlign: direction === "ltr" ? "left" : "right",
    },

    setAlignSelfDirection: {
      alignSelf: direction === "ltr" ? "flex-start" : "flex-end",
    },

    setRotateY180Deg: {
      transform:
        direction === "ltr" ? [{ rotateY: "0deg" }] : [{ rotateY: "180deg" }],
    },
  });
};

const currentDirection = i18next.dir();

export let GlobalStyles = getGlobalStyles(currentDirection);
