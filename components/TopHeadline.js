import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

const TopHeadline = ({ newsList }) => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={newsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("News", { ...item })}
              style={{ width: Dimensions.get("screen").width * 0.9 }}
            >
              <Image
                source={{ uri: item.urlToImage }}
                style={{
                  height: Dimensions.get("screen").width * 0.6,
                }}
                className="mx-3 mt-4 rounded-2xl"
              />
              <Text className="text-xl font-bold text-black mx-4 mt-2">
                {item.title}
              </Text>
              <Text
                style={{ color: "#3d90c7" }}
                className="text-lg font-bold mt-2 mx-5"
              >
                {item.source.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default TopHeadline;
