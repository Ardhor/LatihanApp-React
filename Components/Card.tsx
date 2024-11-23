import { 
    StyleSheet, 
    Text, 
    View} from "react-native";
import { Image } from "expo-image";

type Props = {
    sumberGambar: string,
    judul: string,
    keterangan: string,
}

const PlaceholderImage = require('@/assets/images/react-logo.png');

export default function Card({ sumberGambar, judul, keterangan}: Props){
    const imageSource = sumberGambar ? { uri: sumberGambar } : PlaceholderImage;
    return (
        <View style={styles.panel}>
        <Image style={styles.image} source={imageSource}></Image>
        <View style={styles.panelText}>
          <Text style={styles.textWhite}>{judul}</Text>
          <Text style={styles.textWhiteKecil}>{keterangan}</Text>
        </View>  
      </View> 
    )
}

const styles = StyleSheet.create({
    panel: {
      backgroundColor: "#25292E",
      borderRadius: 16,
      padding: 24,
      marginBottom: 10,
      flexDirection: "row",
      alignItems: "center",
    },
    textWhite: {
      fontSize: 20,
      color: "#FFF",
    },
    textWhiteKecil: {
      fontSize: 12,
      color: "#FFF",
    },
    panelText: {
      padding: 0,
    },
    image: {
      width: 80,
      height: 60,
      borderRadius: 0,
      marginEnd: 24,
    },
  });