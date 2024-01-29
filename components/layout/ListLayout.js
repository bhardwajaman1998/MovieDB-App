import { View, FlatList } from "@gluestack-ui/themed"
import ListCard from "../listCards/ListCard";

const ListLayout = ({data, type}) => {
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => <ListCard item={item} type={type}/>}
            />
        </View>
    )
}

export default ListLayout

