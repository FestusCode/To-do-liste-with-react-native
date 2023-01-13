import { View, Text } from "react-native";
import React from "react";
import Task from "./components/task";
import AppStyle from "./styles/App.style";
import Input from "./components/Input";
import Button from "./components/button";

const App = () => {
  return (
    <View style={AppStyle.BlockPage}>
      <View style={AppStyle.Top}>
        <Text style={AppStyle.Title}> THIS DAY TASK'S</Text>
        <Task taskText="SPRAY PERFUME" />
        <Task taskText="DRINK WATER" />
        <Task taskText="EAT PIZZA" />
      </View>
      <View style={AppStyle.input}>
        <Input />
        <Button />
      </View>
    </View>
  );
};

export default App;
