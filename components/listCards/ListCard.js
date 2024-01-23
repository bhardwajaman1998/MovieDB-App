import { Box, Image, Text, HStack, VStack } from "@gluestack-ui/themed"
import {StyleSheet, TouchableOpacity } from "react-native";

const ListCard = ({item}) => {
    return (
        <Box  py="$2">
            <HStack width={'auto'} gap={12}>
                <Image
                  size="xl"
                  borderRadius="$none"
                  source={{
                    uri: item.avatarUrl,
                  }}
                />
                <VStack justifyContent="space-between">
                    <Text style={styles.nameText}>{item.name}</Text>
                    <Text>Popularity: {item.popularity}</Text>
                    <Text>Realease date: {item.date}</Text>
                    <TouchableOpacity
                        style={styles.moreDetailsbutton}
                        underlayColor='blue'>
                        <Text style={styles.detailsText}>More Details</Text>
                    </TouchableOpacity>
                </VStack>
            </HStack>
        </Box>    
    )
}

const styles = StyleSheet.create({
    moreDetailsbutton:{
        backgroundColor:'blue',
        borderRadius:4,
        width: "100%",
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
      },
    nameText : {
        fontSize: '18',
        fontWeight: 'bold'
    },
    detailsText:{
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10,

    },
  });



export default ListCard
