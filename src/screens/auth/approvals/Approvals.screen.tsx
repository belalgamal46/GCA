import { Dimensions, ImageBackground, ScrollView } from "react-native";
import { Screen } from "../../../components/genericScreens/Screen";

const products = [
  require("../../../images/approvals/approval(1).jpg"),
  require("../../../images/approvals/approval(2).jpg"),
];

export function ApprovalsScreen(props: any) {
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
