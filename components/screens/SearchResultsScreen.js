import React, { useState, useEffect } from "react";

import { View, Text, VStack, FlatList } from "@gluestack-ui/themed"
import { Input, Icon, Heading, NativeBaseProvider } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import BottomDrawer from  '../stacks/BottomDrawer'
import FilterContainer from "../containers/FilterContainer";
import ListLayout from "../layout/ListLayout";
import { searchMedia } from "../services/api";


const SearchResultsScreen = ({navigation}) => {

    const [showActionsheet, setShowActionsheet] = React.useState(false)
    const [selectedFilter, setSelectedFilter] = useState(""); // Add state to store selected filter
    const [searchQuery, setSearchQuery] = useState(""); // Add state to store selected filter

    const handleClose = () => setShowActionsheet(!showActionsheet)


    useEffect(() => {
        setSelectedFilter(filters[0]);
    }, []);

    const handleFilterSelection = (filter) => {
        setSelectedFilter(filter);
        setShowActionsheet(false);
    };
    
    const filters = ["movie", "multi", "tv"]

    const [data, setData] = useState([]);

    const handleQueryChange = (query) => {
        setSearchQuery(query.nativeEvent.text)
    }

    const handleSearch = () => {
        fetchData(selectedFilter, searchQuery)
    }

    const fetchData = async (filter, searchQuery) => {
        try {
          const shows = await searchMedia(searchQuery, filter); // Call fetchMovies function with the selected filter
          setData(shows);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
        <NativeBaseProvider>
            <VStack gap={10}  marginVertical={15} marginHorizontal={40}>
                <Heading fontSize="lg" alignSelf={'left'}>Search Movie/TV Show Name *</Heading>
                <Input 
                    value={searchQuery}
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
                    onChange={handleQueryChange}
                />
                <Heading fontSize="md" alignSelf={'left'}>Chose Search Type</Heading>
                <FilterContainer handleClose={handleClose} showSearchButton={true} selectedFilter={selectedFilter} handleSearchButton={handleSearch}/>
                <BottomDrawer handleClose={handleClose} showActionsheet={showActionsheet} filters={filters} onSelectFilter={handleFilterSelection} selectedFilter={selectedFilter}/>
                <Text fontSize="12">Please select a search type*</Text>
            </VStack>
            <View style={styles.listContainer}>
                { data.length ? (
                    <ListLayout data={data} type={selectedFilter}/>
                ) : (
                    <Text size="2xl" fontWeight="bold" textAlign="center" marginRight={30}>Please initiate a search</Text>
                )}
            </View>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
        margin: 20,
        height: '65%'
    }
  });


export default SearchResultsScreen