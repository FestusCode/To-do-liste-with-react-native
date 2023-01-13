import { View, Text, Image } from "react-native";
import React from "react";
import taskStyle from "./task.style";
const trash = require("../assets/Crud_icon/trash.png");
const Task = ({ taskText }) => {
  return (
    <View style={taskStyle.container}>
      <View style={taskStyle.icon}>
        <Image
          source={require("../assets/Crud_icon/pen.png")}
          style={{ width: 15, height: 15,  }}
        />
        <Image
          source={trash}
          style={{ width: 14, height: 14, }}
        />
      </View>

      <Text style={taskStyle.TaskText}>{taskText}</Text>
    </View>
  );
};

export default Task;
