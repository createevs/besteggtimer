import React from 'react';
import Images from '../config/Images';
import {
  ButtonOutline,
  ButtonSolid,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const WelcomePageScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <ImageBackground
        style={styles.ImageBackground_41}
        source={Images.CountertopLight}
        resizeMode={'cover'}
      >
        <View style={styles.ViewlI} pointerEvents={'auto'}>
          <Image
            style={styles.ImagegN}
            source={Images.MainLogo}
            resizeMode={'contain'}
          />
          <Text style={[styles.Text_02, { color: theme.colors.primary }]}>
            {'Get The Perfect Boiled Eggs Everytime!'}
          </Text>

          <Text style={[styles.Textgx, { color: theme.colors.primary }]}>
            {'Lets get started.'}
          </Text>
        </View>
        <View pointerEvents={'auto'} />
        <View pointerEvents={'auto'}>
          <ButtonSolid
            style={[
              styles.ButtonSolidl8,
              { backgroundColor: theme.colors.primary },
            ]}
            title={'Sign Up'}
          />
          <ButtonOutline
            style={[
              styles.ButtonOutlinero,
              {
                borderColor: theme.colors.lightInverse,
                color: theme.colors.primary,
                backgroundColor: theme.colors.secondary,
              },
            ]}
            title={'Log In'}
          />
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImagegN: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  Text_02: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'NunitoBlack',
    marginBottom: 8,
    lineHeight: 30,
  },
  Textgx: {
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '500',
    fontSize: 18,
  },
  ViewlI: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  ButtonSolidl8: {
    borderRadius: 64,
    fontFamily: 'NunitoBold',
    textAlign: 'center',
    fontSize: 16,
  },
  ButtonOutlinero: {
    borderRadius: 64,
    fontFamily: 'NunitoBold',
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 16,
    fontSize: 18,
  },
  ImageBackground_41: {
    height: '100%',
    justifyContent: 'space-around',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default withTheme(WelcomePageScreen);
