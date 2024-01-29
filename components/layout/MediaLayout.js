import { Heading, Image, Text, View } from "@gluestack-ui/themed"
import { getImageUrl } from "../services/api";
import { StyleSheet } from "react-native";

const MediaLayout = ({item}) => {
    if (!item) return null;

    return (
        <View style={styles.container}>
            {item.original_title != null ? (
                <Heading style={styles.heading}>{item.original_title}</Heading>
            ) : (
                <Heading style={styles.heading}>{item.original_name}</Heading>
            )}

            <Image
                  size="2xl"
                  borderRadius="$none"
                  source={{
                    uri: getImageUrl(item.poster_path) ,
                  }}
            />
            
            <Text style={styles.description}>{item.overview}</Text>
            
            {item.release_date != null ? (
                <Text style={styles.simpleText}>Popularity: {item.popularity} | Release Date: {item.release_date}</Text>
            ) : (
                <Text style={styles.simpleText}>Popularity: {item.popularity} | Release Date: {item.first_air_date}</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        gap: 30,
        margin: 25
    },
    heading: {
        fontSize: 26
    },
    description: {
        marginHorizontal: 15,
        fontSize: 14,
        alignSelf: "left"
    },
    simpleText: {
        marginHorizontal: 15,
        alignSelf: "left",
        fontSize: 12
    }
  });


export default MediaLayout