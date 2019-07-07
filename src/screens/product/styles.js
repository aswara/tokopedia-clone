import { StyleSheet, Dimensions } from "react-native";

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "white",
	},
	icon: {
		color: 'white',
		fontSize: 25
	},
	header: {
		flexDirection: 'row',
		position: 'absolute',
		zIndex: 10,
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		width: '100%',
		justifyContent: 'space-between',
		height: 50,
	},
	boxShadow: {
	    borderColor: 'rgba(0, 0, 0, 0.1)',
	    borderBottomWidth: 10,
	    padding: 15,
	},
	footer: {
		paddingTop: 5,
		paddingRight: 15,
		paddingLeft: 15,
	    backgroundColor: 'white',
	    flex: 1,
	    justifyContent: 'space-around',
	    alignItems: 'center',
	    flexDirection: 'row',
	  },
	swiperDot: {
	    backgroundColor: '#DDDDDD',
	    width: 8,
	    height: 8,
	    borderRadius: 4
	  },
	swiperActiveDot: {
	    backgroundColor: '#2AAA4D',
	    width: 8,
	    height: 8,
	    borderRadius: 4
	},
	swiperPagination: {
	    position: 'absolute',
	    left: 10,
	    bottom: 10,
	    justifyContent: 'flex-start',
	    alignItems: 'flex-start'
	},
	name: {
	  	fontSize: 18,
	  	fontWeight: "600"
	},
	price: {
		marginTop: 5,
	  	fontSize: 18,
	  	fontWeight: "600",
	  	color: '#FF582F',
	  	marginBottom: 8
	},
	buttonBuy: { 
	  	borderColor: '#FF582F',
	  	borderWidth: 3,
	  	borderRadius: 5,
	  	width: 120,
	  	justifyContent: 'center'  
	},
	buttonCart: { 
		backgroundColor: '#FF582F',
		borderRadius: 5 
	},
	description: {
		fontSize: 15,
		color: '#747474'
	},
	title: {
		fontSize: 16,
		color: '#747474',
		fontWeight: '600',
		marginBottom: 5
	},
	infoList: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginBottom: 5
	},
	horizontalLine: {
	    borderBottomColor: 'lightgray',
	    borderBottomWidth: 1,
	    marginBottom: 7,
	    marginTop: 7
	},
	wrapper: {
		marginTop: 15,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#F6F6F6',
		padding: 10,
		borderRadius: 5
	},
	text1: {
		fontSize: 12,
		color: 'gray',
		textAlign: 'center',
		marginBottom: 5
	},
	text2: {
		fontSize: 12,
		color: 'gray',
		fontWeight: "600",
		textAlign: 'center'
	}
});
export default styles;
