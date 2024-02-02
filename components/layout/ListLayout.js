import { View, FlatList } from "@gluestack-ui/themed"
import ListCard from "../listCards/ListCard";

const ListLayout = ({data, type}) => {
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => 
                    <ListCard 
                    item={item.media_type === 'person' ? (item.known_for.length > 0 ? item.known_for[0] : item) : item}
                    type={type}
                    />
                }
            />
        </View>
    )
}

export default ListLayout

