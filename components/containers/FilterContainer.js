import { StyleSheet, TouchableOpacity } from "react-native";
import { HStack, Text, Button, ButtonText, ButtonIcon, SearchIcon, ArrowDownIcon } from "@gluestack-ui/themed"

const FilterContainer = ({handleClose, showSearchButton, selectedFilter, handleSearchButton}) => {

    const handlePress = () => {
        handleSearchButton()
    }

    return (

        <HStack style={styles.container}>
            <TouchableOpacity onPress={handleClose} style={styles.button}>
                <HStack gap={30} style={styles.hStack}>
                    <Text>{selectedFilter}</Text>
                    <ButtonIcon as={ArrowDownIcon} />
                </HStack>
            </TouchableOpacity>
            {showSearchButton ? (
                <Button
                    onPress={
                        handlePress
                    }
                    size="md"
                    variant="solid"
                    action="primary"
                    isDisabled={false}
                    isFocusVisible={false}
                    style={styles.searchButton}
                    >
                        <ButtonIcon as={SearchIcon} />
                        <ButtonText>  Search</ButtonText> 
                </Button>
            ) : (
                <></>
            )}
        </HStack>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 20,
    },
    hStack: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    button: {
      flex: '2 1 0',
      padding: 5,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'black',
      backgroundColor: 'transparent'
    },
    searchButton: {
        flex: '1 1 0'
    },
  });


export default FilterContainer