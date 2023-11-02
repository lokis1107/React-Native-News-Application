import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";

const NewsList = ({ newsList }) => {
  return (
    <View>
      <FlatList
        data={newsList}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity className="flex-row items-center justify-between">
                <Image
                  source={{ uri: item.urlToImage }}
                  style={{ height: 140, width: 130 }}
                  className="mx-2 mt-3 rounded-xl"
                />
                <View style={{ marginRight: 150 }}>
                  <Text
                    numberOfLines={4}
                    style={{ fontSize: 18 }}
                    className="font-bold text-black mr-2"
                  >
                    {item.title}
                  </Text>
                  <Text style={{ color: "#3d90c7" }} className="mt-2 text-lg">
                    {item.source.name}
                  </Text>
                </View>
              </TouchableOpacity>
              <Text
                className="border mt-3 mx-2"
                style={{ borderColor: "gray", height: 0.1 }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default NewsList;
