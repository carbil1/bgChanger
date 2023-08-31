/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';






function App(): JSX.Element {

  const [ranbg, setRanBg] = useState("white");

  const generator = () => {
    const range = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += range[Math.floor(Math.random() * 16)]

      setRanBg(color)
    }
  }

  interface props {
    o?: {
      background: String
    }
  }

  return (
    <>
      <StatusBar backgroundColor={ranbg} />
      <Text>{ranbg}</Text>

      <View style={[styles.container, { backgroundColor: ranbg }]}>
        <TouchableOpacity onPress={generator}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Types</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    color: "white",
    fontSize: 24,
    textTransform: 'capitalize'
  },
}
);

export default App;
