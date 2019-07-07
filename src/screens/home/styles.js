import { StyleSheet, Dimensions } from "react-native";

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "white",
	},
	row: {
		flex: 1,
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		marginBottom: 15,
		alignItems: "center",
	},
	mt: {
		marginTop: 18,
	},
	circle: {
		backgroundColor: '#2aaa4d',
		position: 'absolute',
		height: 80,
		width: Dimensions.get('window').width + 80,
		top: 0,
		left: -40,
		borderBottomLeftRadius: 80,
		borderBottomRightRadius: 80
	}
});
export default styles;
