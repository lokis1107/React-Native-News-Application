import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BellAlertIcon } from "react-native-heroicons/solid";
import Categories from "../components/Categories";
import TopHeadline from "../components/TopHeadline";
import Api from "../api/Api";
import NewsList from "../components/NewsList";

const Home = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    getTopHeadline();
  }, []);

  const getTopHeadline = async () => {
    const result = (await Api.TopHeadlines).data;
    setNewsList(result.articles);
  };
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View className="flex-row items-center justify-between mx-2 mt-2">
          <Text
            style={{ fontSize: 27, color: "#3d90c7" }}
            className="font-bold"
          >
            Trending News
          </Text>
          <BellAlertIcon size={33} color={"#3d90c7"} />
        </View>

        {/* Categories Items */}
        <View>
          <Categories />
        </View>

        {/* Headline Items */}
        <View>
          <TopHeadline newsList={newsList} />
        </View>
        <Text
          className="border mx-2 mt-3"
          style={{ borderColor: "#bbccdd", height: 1 }}
        />

        {/* News List */}
        <View>
          <NewsList newsList={newsList} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
