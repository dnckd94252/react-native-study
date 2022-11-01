import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  const renderMealItem = itemData => {
    const { title, imageUrl, affordability, complexity, duration } =
      itemData.item;
    
    return (
      <MealItem
        title={title}
        imageUrl={imageUrl}
        affordability={affordability}
        complexity={complexity}
        duration={duration}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
