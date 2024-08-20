import { Dimensions, ImageBackground, ScrollView } from "react-native";
import { Screen } from "../../../components/genericScreens/Screen";

const products = [
  require("../../../images/products/t-shapeElbowConnector.jpg"),
  require("../../../images/products/pre-moldedTermination.jpg"),
  require("../../../images/products/pre-moldedJoint.jpg"),
  require("../../../images/products/lugsAndConnectors_1.jpg"),
  require("../../../images/products/heatShrinkableTermination_1.jpg"),
];

export function ProductsScreen(props: any) {
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
              height: screenHeight * (100 / 80),
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
