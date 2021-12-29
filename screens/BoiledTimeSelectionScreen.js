import React from 'react';
import Images from '../config/Images';
import { ScreenContainer } from '@draftbit/ui';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

const BoiledTimeSelectionScreen = props => {
  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <ImageBackground
        style={styles.ImageBackgroundsL}
        source={Images.CountertopLight}
        resizeMode={'cover'}
      >
        <View style={styles.ViewBx} pointerEvents={'auto'}>
          <Image
            style={styles.Imageu5}
            resizeMode={'contain'}
            source={Images.MainLogo}
          />
        </View>

        <View style={styles.Viewuz} pointerEvents={'auto'}>
          <Image
            style={styles.Imageba}
            source={Images.SoftBoiledLabel}
            resizeMode={'contain'}
          />
        </View>

        <View style={styles.View_8L} pointerEvents={'auto'}>
          <Image
            style={styles.ImageDn}
            source={Images.MediumBoiledLabel}
            resizeMode={'contain'}
          />
        </View>

        <View style={styles.Viewro} pointerEvents={'auto'}>
          <Image
            style={styles.Imagewi}
            source={Images.HardBoiledLabel}
            resizeMode={'contain'}
          />
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imageu5: {
    width: 200,
    height: 150,
  },
  ViewBx: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Imageba: {
    width: 150,
    height: 150,
  },
  Viewuz: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageDn: {
    width: 150,
    height: 150,
  },
  View_8L: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Imagewi: {
    width: 150,
    height: 150,
  },
  Viewro: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageBackgroundsL: {
    height: '100%',
    justifyContent: 'space-around',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default BoiledTimeSelectionScreen;
