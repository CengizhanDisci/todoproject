import { StyleSheet } from "react-native";

export default StyleSheet.create({
  todoCard: {
    backgroundColor: "#37474F",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  doneCard: {
    backgroundColor: "#2E7D32",
  },
  todoText: {
    fontSize: 18,
    color: "#ECEFF1",
  },
  doneText: {
    textDecorationLine: "line-through",
    color: "#A5D6A7",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  actionButton: {
    backgroundColor: "orange",
    borderRadius: 5,
    padding: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: "#102027",
    fontWeight: "700",
  },
});

