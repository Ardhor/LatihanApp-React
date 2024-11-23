import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import Card from "@/Components/Card";
const LocalImage = require('@/assets/images/forest.jpg');

export default function Index() {
  return (
    <View style={styles.container}>
      <Card 
        sumberGambar= "https://mirzayogy.github.io/assets/image/08.jpeg"
        judul="Luar Masjid"
        keterangan="Kucing"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
