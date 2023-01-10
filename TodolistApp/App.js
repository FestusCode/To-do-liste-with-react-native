import { View, Text } from "react-native";
import React from "react";
import Task from "./components/task";
import AppStyle from "./styles/App.style";
import Input from "./components/Input";
// import Main from "./containers/App/Main";

const App = () => {
  return (
    <View style={AppStyle.BlockPage}>
      <Text style={AppStyle.Title}> THIS DAY TASK'S</Text>
      <Task taskText="SPRAY PERFUME" />
      <Task taskText="DRINK WATER" />
      <Task taskText="EAT PIZZA" />
      <View>
        <Input/>
      </View>
    </View>
  );
};

export default App;
