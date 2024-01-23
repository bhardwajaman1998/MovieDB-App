import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import IndexScreen from "../screens/IndexScreen"
import DetailsScreen from "../screens/DetailsScreen"

const Stack = createNativeStackNavigator()

const AppStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Index"
                component={IndexScreen}
                options={{
                    title:"Movies App",
                    headerStyle:{
                        backgroundColor:'#2c3e50'
                    },
                    headerTitleStyle:{
                        color:'#fff'
                    }
                }}
            />
            <Stack.Screen name="Details" component={DetailsScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack
