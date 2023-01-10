import { View, Text } from "react-native";
import React from "react";
import taskStyle from "./task.style";
const Task = ({taskText}) => {
  return (
    <View style={taskStyle.container}>
      <Text style={taskStyle.TaskText}>{taskText}</Text>
    </View>
  );
};

export default Task;
