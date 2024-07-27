import { StyleSheet } from "react-native";

export default StyleSheet.create({
  saveCardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#37474F",
    paddingTop: 10,
  },
  saveInput: {
    flex: 1,
    backgroundColor: "#37474F",
    color: "#ECEFF1",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: "orange",
    borderRadius: 10,
    padding: 10,
  },
  saveButtonText: {
    color: "#102027",
    fontWeight: "700",
  },
});