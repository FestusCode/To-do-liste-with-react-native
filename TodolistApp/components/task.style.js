import { StyleSheet } from "react-native";

const taskStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "80 %",
    borderRadius: 5,
    marginBottom: 10,
  },
  TaskText: {
    textAlign: "center",
    padding: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "#f8f888a8",

    borderRadius: 5,
  },
});

export default taskStyle;
