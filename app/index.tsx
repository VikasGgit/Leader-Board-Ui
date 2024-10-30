import { View, Text, StyleSheet, Image, FlatList, ScrollView } from "react-native";


const data = [

  {
    title: "Ram",
    rank: 1,
    image:
      "https://img.freepik.com/premium-vector/customer-profile-icon-vector-illustration_1151483-57140.jpg?semt=ais_hybrid",
  },
  {
    title: "Vikas",
    rank: 2,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Akash",
    rank: 3,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
];

const cardData = [
  {
    title: "Leader 1",
    rank: 1,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Leader 2",
    rank: 2,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Leader 3",
    rank: 3,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Leader 4",
    rank: 4,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Leader 5",
    rank: 5,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Leader 5",
    rank: 5,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Leader 5",
    rank: 5,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Leader 5",
    rank: 5,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Leader 5",
    rank: 5,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Leader 5",
    rank: 5,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Leader 5",
    rank: 5,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Leader 5",
    rank: 5,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Leader 5",
    rank: 5,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Leader 5",
    rank: 5,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
];

const Index = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerTitle}>Leader Board</Text>
        <View style={styles.mainCard}>
          {data.map((item, index) => (
            <View key={index} style={styles.leaderItem}>
              <View  style={{backgroundColor:"black", padding:10, alignItems:"center", paddingBottom:20, justifyContent:"center" ,borderRadius:10 }} >
              <Image style={styles.image} source={{ uri: item.image }} />
              <Text style={styles.itemTitle}>{item.title}</Text>
              </View>
              <Text style={styles.itemRank}>{item.rank}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.cardContainer}>
        <FlatList
          data={cardData}
          renderItem={({ item, index }) => (
            <View style={styles.flatListItem}>
              <View style={styles.flatListLeft}>
                <Text style={styles.indexText}>{index + 1}</Text>
                <Image style={styles.image1} source={{ uri: item.image }} />
                <Text style={styles.flatListItemTitle}>{item.title}</Text>
              </View>
              <View>
                <Text style={styles.flatListRank}>{item.rank}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "green",
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  mainCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 12,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  leaderItem: {
    alignItems: "center",
  },
  itemTitle: {
    color: "green",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
  },
  itemRank: {
    color: "blue",
    fontSize: 14,
    backgroundColor: "orange",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 100,
    marginTop: 5,
    fontWeight: "bold",
    top:-20,
  },
  cardContainer: {
    marginTop: 20,
  },
  flatListItem: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  flatListLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  indexText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  flatListItemTitle: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
    marginLeft: 10,
  },
  flatListRank: {
    fontSize: 16,
    color: "#555",
    fontWeight: "600",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  image1: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
