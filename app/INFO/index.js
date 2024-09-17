import {router,useLocalSearchParams} from 'expo-router';
import  {useEffect,useState} from 'react';
import {StyleSheet, ImageBackground, Text, View} from 'react-native';
export default function Page() 
{
  const name=useLocalSearchParams()["data"];
  const [data,setData]=useState({});
  useEffect(()=>{
    setData(getdata(name));
  },[name])
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.container}
    >
      <View style={styles.main}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.subhead}>Depth: </Text>
        <Text style={styles.subtitle}>{data.depth}</Text>
        <Text style={styles.subhead}>Animals:</Text>
        <Text style={styles.subtitle}>{data.animals} </Text>
        <Text style={styles.subhead}>Waste:</Text>
        <Text style={styles.subtitle}>{data.waste}</Text>
        <Text style={styles.subhead}>Impact On Earth:</Text>
        <Text style={styles.subtitle}>{data.impactOnEarth}</Text>
        <Text style={styles.subhead}>Cleanup Methods:</Text>
        <Text style={styles.subtitle}>{data.cleanupMethods}</Text>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: 24,
    },
    subhead: {
      color: "#FFFFFF",
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 4,
      marginLeft: 10,
    },
    main: {
      backgroundColor: "#38434D",
      flex: 1,
      opacity: 0.8,
      flexDirection: "column",
      padding: 16,
    },
    title: {
      color: "#FFFFFF",
      justifyContent: "center",
      alignSelf : "center",
      fontSize: 29,
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: 20,
      color: "#FFFFFF",
      padding: 16,
    },
    btntxt: {
      fontSize: 24,
      color: "#FFFFFF",
      marginBottom: 16,
      padding: 16,
      borderRadius: 8,
    },
    main: {
      backgroundColor: "#38434D",
      flex: 1,
      opacity: 0.8,
      flexDirection: "column",
    },
    btn: {
      backgroundColor: "#38434D",
      borderRadius: 8,
      opacity: 0.7,
    },
  });
  const getdata=(name)=>{
    const data=[
        {
          "name": "Epipelagic Zone (Sunlight)",
          "depth": "0-200 meters",
          "animals": [
            "Dolphins",
            "Turtles",
            "Tuna",
            "Sharks",
            "Jellyfish",
            "Sea Lions"
          ],
          "waste": [
            "Plastic debris (bottles, bags)",
            "Oil spills",
            "Chemical runoff (pesticides, fertilizers)",
            "Discarded fishing gear"
          ],
          "impactOnEarth": [
            "Marine animals ingest plastic, leading to injury and death",
            "Chemical runoff causes eutrophication, creating dead zones",
            "Microplastics enter the food chain, affecting marine life and potentially human health"
          ],
          "cleanupMethods": [
            "Surface Cleanup: Use of ships, drones, and ocean clean-up devices",
            "Biodegradable Materials: Encourage the use of biodegradable materials",
            "Oil Spill Response: Use of booms, skimmers, and chemical dispersants",
            "Policy: Stricter regulations on waste disposal and fishing gear management"
          ]
        },
        {
          "name": "Mesopelagic Zone (Twilight)",
          "depth": "200-1,000 meters",
          "animals": [
            "Lanternfish",
            "Squid",
            "Snipe Eels",
            "Hatchetfish",
            "Bristlemouth",
            "Barrel-eye Fish"
          ],
          "waste": [
            "Sinking plastics",
            "Chemical pollutants (e.g., Persistent Organic Pollutants)",
            "Fishing gear"
          ],
          "impactOnEarth": [
            "Waste in this zone affects species like fish and squid, which ingest microplastics",
            "Toxic chemicals accumulate in the food chain, potentially contaminating seafood consumed by humans"
          ],
          "cleanupMethods": [
            "Reduce Plastic Use: Minimize plastic production and increase recycling efforts",
            "Innovative Technology: Use of remotely operated vehicles (ROVs) to collect waste",
            "Pollution Control: Better regulation and monitoring of chemicals that enter the ocean"
          ]
        },
        {
          "name": "Bathypelagic Zone (Midnight)",
          "depth": "1,000-4,000 meters",
          "animals": [
            "Giant Squid",
            "Anglerfish",
            "Gulper Eel",
            "Vampire Squid"
          ],
          "waste": [
            "Sinking debris (plastics, metals)",
            "Ghost fishing gear"
          ],
          "impactOnEarth": [
            "Plastics persist for long periods, threatening deep-sea species",
            "Heavy waste could damage delicate ecosystems, leading to the loss of biodiversity"
          ],
          "cleanupMethods": [
            "Biodegradation Research: Investigating microbes capable of breaking down plastics",
            "Sustainable Fishing Practices: Use biodegradable fishing gear and reduce gear loss",
            "Waste Management: Reduce waste at the source to minimize deep-sea contamination"
          ]
        },
        {
          "name": "Abyssopelagic Zone (Abyss)",
          "depth": "4,000-6,000 meters",
          "animals": [
            "Deep-sea Cucumbers",
            "Dumbo Octopus",
            "Sea Spiders",
            "Abyssal Fish"
          ],
          "waste": [
            "Heavy plastics",
            "Metals",
            "Debris from deep-sea mining (potential future impact)"
          ],
          "impactOnEarth": [
            "Waste in this zone can affect the few, slow-growing species that live here",
            "Mining waste could disturb seafloor ecosystems and cause long-term damage to biodiversity"
          ],
          "cleanupMethods": [
            "Minimize Deep-Sea Mining: Encourage sustainable mining practices and regulate waste disposal",
            "Marine Protected Areas: Expand and enforce protection of deep-sea habitats",
            "Technology Development: Improve waste detection and removal technologies"
          ]
        },
        {
          "name": "Hadalpelagic Zone (Trenches)",
          "depth": "6,000 meters and deeper",
          "animals": [
            "Amphipods",
            "Hadal Snailfish",
            "Deep-sea Shrimp",
            "Foraminifera (microscopic organisms)"
          ],
          "waste": [
            "Microplastics",
            "Heavy metals",
            "Historically dumped hazardous waste (e.g., radioactive materials)"
          ],
          "impactOnEarth": [
            "Even the deepest trenches have been contaminated by human activities",
            "Waste in these extreme environments could disrupt"
          ],
          "cleanupMethods": [
            "Research: Study the impact of waste on deep-sea life and ecosystems",
            "International Cooperation: Develop agreements to protect deep-sea environments",
            "Innovation: Create specialized technologies for waste removal in extreme conditions"
          ]
          }
      ]
      final={}
    for(let i=0;i<data.length;i++){
      if(data[i].name===name){
        final["name"]=data[i].name;
        final["depth"]=data[i].depth;
        final["animals"]=data[i].animals;
        final["waste"]=data[i].waste;
        final["impactOnEarth"]=data[i].impactOnEarth;
        final["cleanupMethods"]=data[i].cleanupMethods;
      }

    }
    return final;
  }
