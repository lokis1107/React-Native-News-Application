import { View, Text, FlatList, Pressable } from "react-native";
import React, { useState } from "react";

const Categories = () => {
  const [active, setActive] = useState(1);
  const menu = [
    {
      id: 1,
      name: "Latest",
    },
    {
      id: 2,
      name: "World",
    },
    {
      id: 3,
      name: "Businness",
    },
    {
      id: 4,
      name: "Sports",
    },
    {
      id: 5,
      name: "Life Action",
    },
    {
      id: 6,
      name: "Movie",
    },
  ];

  return (
    <View>
      <FlatList
        data={menu}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          let isActive = item.id == active;
          return (
            <View className="mx-2 mt-3">
                
              <Pressable onPress={() => setActive(item.id)}>
                <Text
                  style={{ color: isActive ? "#3d90c7" : "black" }}
                  className="text-xl font-bold"
                >
                  {item.name}
                </Text>
                {
                    isActive ?(
                        <Text className="-mt-4 text-2xl mx-2">__ _</Text>
                    ):(null)
                }
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Categories;
