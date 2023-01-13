import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ButtonStyle from "./button.style";

const Button = () => {
  return (
    <TouchableOpacity style={ButtonStyle.container}>
      <Text style={ButtonStyle.text}>Submit</Text>
    </TouchableOpacity>
  );
};

export default Button;
