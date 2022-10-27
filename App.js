import React, { useRef, useEffect } from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  StatusBar,
  PanResponder,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const App = () => {
  const move = useRef(new Animated.Value(0)).current;
  const start = () => {
    Animated.timing(move, {
      toValue: 350,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
 
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.Main}>
      <View style={styles.container}>
     
        <Animated.View
          style={[
            styles.textCon,
            {
              opacity: fadeAnim,
            },
          ]}
        >
          <Text style={styles.text}>
            welcome to Animation React Native !!!!!
          </Text>
        </Animated.View>

        <Animated.View
          style={[
            styles.top,
            {
              translateX: move,
            },
          ]}
        >
          <Ionicons name="airplane-outline" size={30} color="black" />
        </Animated.View>

        <View>
          <Button title="Start" onPress={start} />
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
  },


  textCon: {
    padding: 20,
    backgroundColor: "violet",
  },
  text: {
    fontSize:20 ,
  },

});

export default App;
