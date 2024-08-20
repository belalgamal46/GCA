import { Dimensions, ImageBackground, ScrollView } from 'react-native';
import { Screen } from '../../../components/genericScreens/Screen';

const certificates = [
  require('../../../images/certificates/cert_1.jpg'),
  require('../../../images/certificates/cert_2.jpg'),
  require('../../../images/certificates/cert_3.jpg'),
  require('../../../images/certificates/cert_4.jpg'),
  require('../../../images/certificates/cert_5.jpg'),
  require('../../../images/certificates/cert_6.jpg'),
  require('../../../images/certificates/cert_7.jpg'),
  require('../../../images/certificates/cert_8.jpg'),
  require('../../../images/certificates/cert_9.jpg'),
  require('../../../images/certificates/cert_10.jpg'),
  require('../../../images/certificates/cert_11.jpg'),
  require('../../../images/certificates/cert_12.jpg'),
  require('../../../images/certificates/cert_13.jpg'),
  require('../../../images/certificates/cert_14.jpg'),
  require('../../../images/certificates/cert_15.jpg'),
  require('../../../images/certificates/cert_16.jpg'),
  require('../../../images/certificates/cert_17.jpg'),
  require('../../../images/certificates/cert_18.jpg'),
  require('../../../images/certificates/cert_19.jpg'),
  require('../../../images/certificates/cert_20.jpg'),
  require('../../../images/certificates/cert_21.jpg'),
  require('../../../images/certificates/cert_22.jpg'),
  require('../../../images/certificates/cert_23.jpg'),
];

export function CertificateScreen(props: any) {
  const screenHeight = Dimensions.get('screen').height;

  return (
    <Screen>
      <ScrollView style={{ width: '100%' }}>
        {certificates.map((img, i) => (
          <ImageBackground
            key={i}
            source={img}
            style={{
              width: '100%',
              height: screenHeight * (90 / 100),
              borderStyle: 'solid',
              borderColor: 'black',
            }}
            resizeMode="contain"
          />
        ))}
      </ScrollView>
    </Screen>
  );
}
