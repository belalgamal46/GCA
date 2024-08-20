import { useState } from "react";
import { Animated, Easing, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Video } from "expo-av";
import {
  BOTTOM_SHEET_ICON_BG,
  PRIMARY,
  TEXT_COLOR_2,
  TEXT_COLOR_3,
  TRANSPARENT,
} from "../../theme/colors";
import { YStack } from "./Stack";
import { ActionBtn } from "./buttons/ActionBtn";
import { MediumText } from "./text/MediumText";
import { SemiBoldText } from "./text/SemiBoldText";
import { useAppSelector } from "../../redux/hooks/hooks";

// -----------------------------------------------------

type Props = {
  bottomSheetIcon: React.ReactNode;
  bgColor?: string;
  setVisibility: (visibility: boolean) => void;
  isVisible: boolean;
};

// -----------------------------------------------------

export const BottomSheet = ({
  bottomSheetIcon,
  bgColor = BOTTOM_SHEET_ICON_BG,
  setVisibility,
  isVisible,
}: Props) => {
  const [modalHeight] = useState(new Animated.Value(hp(50)));
  // Initialize the modal height as a state with initial value

  const latestScan = useAppSelector(({ scan }) => scan.scans[0]);

  const toggleBottomSheet = () => setVisibility(!isVisible);

  // ---------------------------------------------------

  const increaseModalHeight = () => {
    Animated.timing(modalHeight, {
      toValue: hp(90), // Set the target height when the video is displayed
      duration: 900, // Set the duration of the animation
      easing: Easing.linear, // Set the easing function for the animation
      useNativeDriver: false, // Specify if the animation should use native driver
    }).start();
  };

  // ---------------------------------------------------

  return (
    <YStack>
      <Modal
        isVisible={isVisible}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          width: "100%",
          margin: 0,
        }}
      >
        <Animated.View style={{ ...styles.bottomSheet, height: modalHeight }}>
          <YStack
            justifyContent="center"
            alignItems="center"
            bgColor={bgColor}
            width={90}
            height={90}
            style={{
              borderRadius: 50,
            }}
          >
            {bottomSheetIcon}
          </YStack>
          <SemiBoldText text="Watch tutorial video" />
          <MediumText
            text="Watch a video to see how to install this kit throw a video in the right way."
            color={TEXT_COLOR_2}
            style={{ textAlign: "center", marginTop: 12, marginBottom: 24 }}
          />
          {latestScan?.cable?.tutorial_link ? (
            <ActionBtn
              onPress={increaseModalHeight}
              text="Watch the video"
              width={90}
              alignItems="center"
              style={{ marginBottom: 8 }}
            />
          ) : (
            <MediumText color={PRIMARY} text="No video for this scan" />
          )}
          <ActionBtn
            onPress={toggleBottomSheet}
            text="I know how to install it"
            width={90}
            alignItems="center"
            bgColor={TRANSPARENT}
            textColor={PRIMARY}
          />
          <YStack width={wp(90)} height={hp(40)}>
            <Video
              source={{
                uri: "https://www.shutterstock.com/shutterstock/videos/1103019811/preview/stock-footage-green-background-stock-video-effects-vj-loop-abstract-animation-hd-k-k-mp.mp4",
              }}
              shouldPlay={isVisible}
              useNativeControls
              style={{ flex: 1 }}
            />
          </YStack>
        </Animated.View>
      </Modal>
    </YStack>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: TEXT_COLOR_3,
    height: hp(50),
    width: wp(100),
    alignSelf: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 24,
    paddingBottom: 242,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
