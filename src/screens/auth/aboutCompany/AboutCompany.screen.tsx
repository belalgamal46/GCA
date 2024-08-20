import { Dimensions, ImageBackground, ScrollView } from "react-native";
import { Screen } from "../../../components/genericScreens/Screen";

const products = [
  require("../../../images/aboutCompany/aboutCompany(2).jpg"),
  require("../../../images/aboutCompany/aboutCompany(1).jpg"),
];

export function AboutCompanyScreen  (props: any) {
  const screenHeight = Dimensions.get("screen").height;

  return (
    <Screen>
      <ScrollView style={{ width: "100%" }}>
        {products.map((img, i) => (
          <ImageBackground
            key={i}
            source={img}
            style={{
              width: "100%",
              height: screenHeight * (90 / 140),
              borderStyle: "solid",
              borderColor: "black",
            }}
            resizeMode="contain"
          />
        ))}
      </ScrollView>
    </Screen>
  );
}
