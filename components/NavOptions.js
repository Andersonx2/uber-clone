import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from "../slices/navSlice";

const data = [
    {
        id: '123',
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen"
    },
]

const NavOptions = () => {
    const Navagation = useNavigation();
    const origin = useSelector(selectOrigin);
    return (
        <FlatList
            data={data}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity 
                onPress={()=>Navagation.navigate(item.screen)}
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                  
                    <View style={tw`${!origin &&  "opacity-20"}`}>
                        <Image
                            style={{ width: 120, height: 120, resizeMode: "contain" }}
                            source={{
                                uri: item.image
                            }}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name="arrowright"
                            color="white"
                            type="antdesign"
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions