import { View,Text, TextInput } from "react-native";
import React from "react";
import inputStyle from "./input.style.js";
const Input = () => {
  return (
    <View style={inputStyle.container}>
      <Text style={inputStyle.test}> Write your daily tasks</Text>
      <TextInput
        style={inputStyle.field}
        placeholder="Enter Your Note"
      />
    </View>
  );
};

export default Input;
