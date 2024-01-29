import { Box, Image, Text, HStack, VStack } from "@gluestack-ui/themed"
import {StyleSheet, TouchableOpacity } from "react-native";
import { getImageUrl } from "../services/api";
import { useNavigation } from '@react-navigation/native';

const ListCard = ({item, type}) => {

    const navigation = useNavigation(); // Get navigation object

    const handleNavigation = () => {
        navigation.navigate('Media', { itemId: item.id, type: type});
    }
    return (
        <Box  py="$2" flexWrap="nowrap">
            <HStack width={'auto'} gap={12}>
                <Image
                  size="xl"
                  borderRadius="$none"
                  source={{
                    uri: getImageUrl(item.backdrop_path) ,
                  }}
                />
                <VStack justifyContent="space-between">
                    {item.title ? (
                        <Text style={styles.nameText}>{item.title}</Text>
                    ) : (
                        <Text style={styles.nameText}>{item.name}</Text>
                    )}
                    <Text>Popularity: {item.popularity}</Text>
                    {item.release_date ? (
                        <Text>Realease date: {item.release_date}</Text>
                    ) : (
                        <Text>Realease date: {item.first_air_date}</Text>
                    )}
                    <TouchableOpacity
                        style={styles.moreDetailsbutton}
                        underlayColor='blue'
                        onPress={handleNavigation}
                        >
                        <Text style={styles.detailsText}>More Details</Text>
                    </TouchableOpacity>
                </VStack>
            </HStack>
        </Box>    
    )
}

const styles = StyleSheet.create({
    moreDetailsbutton:{
        backgroundColor:'#9d92f0',
        borderRadius:4,
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
      },
    nameText : {
        fontSize: '18',
        fontWeight: 'bold',
        width: 200
    },
    detailsText:{
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10,

    },
  });



export default ListCard
