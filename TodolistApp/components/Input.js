import { View,Text, TextInput } from "react-native";
import React from "react";
import inputStyle from "./input.style.js";
const Input = () => {
  return (
      <View style={inputStyle.container}>
          <Text style={inputStyle.test}> hello </Text>
      <TextInput style={inputStyle.field} />
    </View>
  );
};

export default Input;
