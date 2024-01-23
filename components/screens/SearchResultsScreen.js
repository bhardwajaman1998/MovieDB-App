import { View, Text, VStack, FlatList } from "@gluestack-ui/themed"
import { Input, Icon, Heading, NativeBaseProvider } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import FilterContainer from "../containers/FilterContainer";
import ListCard from "../listCards/ListCard";

const SearchResultsScreen = ({navigation}) => {

    const data = [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          name: "Aafreen Khan",
          popularity: "12:47 PM",
          date: "Good Day!",
          avatarUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            name: "Aafreen Khan",
            popularity: "12:47 PM",
            date: "Good Day!",
            avatarUrl:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          },
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            name: "Aafreen Khan",
            popularity: "12:47 PM",
            date: "Good Day!",
            avatarUrl:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          },
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            name: "Aafreen Khan",
            popularity: "12:47 PM",
            date: "Good Day!",
            avatarUrl:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          },
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            name: "Aafreen Khan",
            popularity: "12:47 PM",
            date: "Good Day!",
            avatarUrl:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          },
      ]



    return (
        <NativeBaseProvider>
            <VStack gap={10}  marginVertical={15} marginHorizontal={40}>
                <Heading fontSize="lg" alignSelf={'left'}>Search Movie/TV Show Name *</Heading>
                <Input 
                    placeholder="Search People & Places" 
                    width="100%" 
                    borderRadius="4" 
                    py="3" 
                    px="1" 
                    fontSize="14" 
                    InputLeftElement={
                        <Icon 
                            m="2" 
                            ml="3" 
                            size="6" 
                            color="gray.400" 
                            as={
                                <MaterialIcons 
                                    name="search" 
                                />
                            } 
                        />
                    }
                />
                <Heading fontSize="md" alignSelf={'left'}>Chose Search Type</Heading>
                <FilterContainer showSearchButton={true}/> 
                <Text fontSize="12">Please select a search type*</Text>
            </VStack>
            <View style={styles.listContainer}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <ListCard item={item}/>}
                />
            </View>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
        margin: 20
    }
  });


export default SearchResultsScreen