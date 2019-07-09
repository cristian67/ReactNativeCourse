import { StyleSheet } from "react-native";
import metrics from "../Theme/metrics";

const BARHEIGHT = 64;

export default styles = StyleSheet.create({

    navBar: {
      marginTop:metrics.statusBarHeight,
      height:BARHEIGHT,
      backgroundColor:"#eeeeee",
      alignItems:"center",
      justifyContent:"center"
      },
    
    title: {
      fontWeight:"bold"
    },
})