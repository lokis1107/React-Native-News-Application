import {
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
  ScrollView,
  Share,
} from "react-native";
import React from "react";
import {
  PaperAirplaneIcon,
  ArrowLeftIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const News = (props) => {
  let data = props.route.params;
  const navigation = useNavigation();

  const shareNews=()=>{
    Share.share({
        message:data.title
    })
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 10 }}
    >
      <View>
        <View className="flex-row items-center justify-between mx-4 mt-2 mb-5">
          <Pressable onPress={() => navigation.goBack()}>
            <ArrowLeftIcon size={32} color={"black"} />
          </Pressable>
          <Pressable onPress={()=>shareNews()}>
            <PaperAirplaneIcon color={"black"} size={32} />
          </Pressable>
        </View>
        <View className="items-center">
          <Image
            className="rounded-2xl"
            source={{ uri: data.urlToImage }}
            style={{
              height: 280,
              width: Dimensions.get("screen").width * 0.95,
            }}
          />
        </View>
        <View style={{ marginRight: 20 }}>
          <Text className="text-2xl font-bold mx-4 mt-3">{data.title}</Text>
        </View>
        <View>
          <Text className="text-lg mx-4 mt-2">{data.description}</Text>
          <Text className="text-lg mx-4 mt-2">{data.content}</Text>
        </View>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={{ color: "#3d90c7" }} className="text-lg mx-4 mt-2">
            Read More
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default News;
