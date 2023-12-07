import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Card, List } from '@ui-kitten/components';
import { LinearGradient } from 'expo-linear-gradient';

export default function () {
  const fruits = ['SoyBeansss', 'Tree Nuts', 'Peanuts', 'Gluten'];
  const additionalInfo = [
    ' Soybean allergies are relatively common, especially among children, and involve an adverse immune reaction to proteins found in soy. Symptoms can range from mild, like rashes or gastrointestinal discomfort, to severe reactions such as anaphylaxis. Those with soy allergies need to avoid soy and its derivatives, which are prevalent in various foods, including tofu, soy milk, and many processed products. Reading food labels is essential to identify soy ingredients, as they are often present in unexpected products. Although some children outgrow this allergy, others may carry it into adulthood. Avoiding soy can be challenging due to its widespread use, but with careful dietary management and awareness, individuals with soy allergies can lead healthy lives.',
    'Tree nut allergies are among the most prevalent and often lifelong food allergies, affecting both children and adults. This allergy encompasses a variety of nuts, such as almonds, cashews, and walnuts, and poses risks ranging from mild reactions like rashes to severe anaphylaxis. Due to the potential severity, individuals with this allergy must diligently avoid tree nuts, carefully read food labels, and be wary of cross-contamination. Carrying an epinephrine auto-injector is essential for immediate response in case of accidental exposure. With vigilant management, those with tree nut allergies can lead safe and active lives.',
    'Peanut allergies are one of the most common and severe food allergies, often beginning in childhood and sometimes persisting into adulthood. This allergy can cause a wide range of symptoms, from mild reactions like skin irritation to severe ones such as anaphylaxis, a potentially life-threatening condition. Due to the risk of severe allergic reactions, individuals with peanut allergies must avoid peanuts and peanut-derived products, and they often need to be vigilant about cross-contamination in food preparation. Reading labels for hidden peanut ingredients is crucial for safety. Many schools and public spaces implement peanut-free policies to protect those with this allergy. Carrying an epinephrine auto-injector is crucial for immediate response in case of accidental exposure. With careful management, people with peanut allergies can lead safe and healthy lives.',
    'Gluten allergies, often known as Celiac disease, involve a severe immune reaction to gluten, a protein found in wheat, barley, and rye. Symptoms can range from digestive discomfort, such as bloating and diarrhea, to more serious effects like malabsorption of nutrients and intestinal damage. Strict adherence to a gluten-free diet is essential for managing this condition, requiring individuals to avoid traditional bread, pasta, and many processed foods, while opting for gluten-free alternatives. Due to the widespread use of gluten in food products, careful label reading is critical to avoid accidental ingestion. With increasing awareness, there are now more gluten-free options available, making it easier for those with gluten allergies to maintain a balanced and safe diet.',

  ];


const data = fruits.map((fruit, index) => ({
  title: fruit,
  info: additionalInfo[index],
}));

const renderItemHeader = (headerProps, info) => (
  <View {...headerProps}>
    <Text style={styles.cardTitle}>{info.item.title}</Text>
  </View>
);

const renderItemFooter = (footerProps, info) => (
  <Text style={styles.cardText} {...footerProps}>
    {info.item.info}
  </Text>
);

const renderItem = (info) => (
  <Card
    style={styles.card}
    status='basic'
    header={headerProps => renderItemHeader(headerProps, info)}
    footer={footerProps => renderItemFooter(footerProps, info)}
  />
);

return (
  <LinearGradient
    colors={['#ffafbd', '#ffc3a0']}
    style={styles.gradient}
  >
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        {data.map((item, index) => (
          renderItem({ item, index })
        ))}
      </View>
    </ScrollView>
  </LinearGradient>
);
}

const styles = StyleSheet.create({
gradient: {
  flex: 1,
},
container: {
  flex: 1,
},
contentContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 8,
  paddingVertical: 4,
},
card: {
  margin: 20,
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: { width: 2, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 30,
  elevation: 5,
  backgroundColor: '#fff',
},
cardTitle: {
  fontWeight: 'bold',
  fontSize: 20,
  margin: 20,
},
cardText: {
  padding: 16,
},
});