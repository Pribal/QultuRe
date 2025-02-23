import { Image, ScrollView, View } from "react-native"
import { Text, ProgressBar, Icon } from "react-native-paper"
import Badge from '../components/badge';
import RecentlyVisited from "../components/recentlyVisited";

const lastVisited = [
    { name: "Café Montmartre", date: "03/15/2025" },
    { name: "Bar du Marais", date: "04/08/2025" },
    { name: "Le Bistrot Lyonnais", date: "05/21/2025" },
    { name: "Terrasse du Louvre", date: "06/30/2025" },
    { name: "Brasserie Belleville", date: "07/14/2025" },
    { name: "Rooftop de la Défense", date: "08/05/2025" },
    { name: "Le Vin de Bordeaux", date: "09/27/2025" },
    { name: "Taverne des Champs", date: "10/11/2025" },
    { name: "Bar du Quartier Latin", date: "11/22/2025" },
    { name: "Cave à Vins Bastille", date: "12/31/2025" }
  ]
  

export default function User() {
    return (
        <>
            <ScrollView>
                <View style={{display: "flex", flexDirection: "row", alignItems: "center", marginTop: 50, justifyContent: "space-evenly"}}>
                    <Image source={
                            {uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpzxSFAvJKwKCA3D8by93pnQMYKpKigJJQ4A&s"}
                        }
                        style = {{
                            width: "35%",
                            aspectRatio: 1,
                            borderRadius: 100
                        }}
                    />
                    <View>
                        <Text variant="headlineMedium">Username</Text>
                        <Text variant="titleMedium">username@domain.com</Text>
                    </View>
                </View>

                <Text variant="titleMedium" style={{marginTop: 16, marginLeft: 28}}><Text style={{fontWeight: "bold"}}>Lvl 12</Text> (1800/6300)</Text>
                <ProgressBar progress={0.3} color="blue" style={{
                    width: "90%",
                    alignSelf: "center",
                    borderRadius: 50,
                    height: 8,
                    marginTop: 3
                }}/>

                <Text variant="titleMedium" style={{ marginTop: "5%", marginLeft: "6%"}}>Badges</Text>
                <View style={{
                    width: "90%",
                    backgroundColor: "lightgray",
                    alignSelf: "center",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    paddingTop: "6%",
                    gap: "3%",
                    borderRadius: 10,
                }}>
                    <Badge name="badge" color="black" icon={<Icon color="white" size={50} source={"offer"}/>}/>
                    <Badge name="badge" color="red" icon={<Icon color="white" size={50} source={"offer"}/>}/>
                    <Badge name="badge" color="blue" icon={<Icon color="white" size={50} source={"offer"}/>}/>
                    <Badge name="badge" color="violet" icon={<Icon color="white" size={50} source={"offer"}/>}/>
                    <Badge color="darkgray" icon={null}/>
                    <Badge color="darkgray" icon={null}/>
                </View>

                <Text variant="titleMedium" style={{ marginTop: "4%", marginLeft: "9%"}}>Last Visited</Text>
                <ScrollView style={{
                    width: "90%",
                    alignSelf: "center",
                    backgroundColor: "lightgray",
                    paddingHorizontal: "3%",
                    paddingVertical: "2%",
                    borderRadius: 8,
                }}>
                    { lastVisited.map((visit) => (
                        <RecentlyVisited name={visit.name} date={visit.date} key={visit.name} />
                    )) }
                </ScrollView>
                
                <View style={{height: 30}}/>
            </ScrollView>
        </>
    )
}