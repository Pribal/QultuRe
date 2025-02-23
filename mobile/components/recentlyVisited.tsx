import { View } from "react-native"
import { Text } from "react-native-paper"

interface RecentlyVisitedProps {
    name: string,
    date: string
}

export default function RecentlyVisited({name, date}: RecentlyVisitedProps) : React.ReactNode {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "darkgray",
            padding: 6,
            marginVertical: 3,
            borderRadius: 6
        }}>
            <Text variant="labelMedium">{name}</Text>
            <Text variant="labelSmall">{date}</Text>
        </View>
    )
}