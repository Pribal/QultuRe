import { View } from "react-native"
import { Text } from "react-native-paper"

interface BadgeProps {
    color: string,
    icon: React.ReactNode,
    name?: string
}

export default function Badge({color, icon, name}: BadgeProps) : React.ReactNode {
    return (
        <View>
            <View style={{
                backgroundColor: color,
                width: 90,
                height: 90,
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
            }}>
                {icon}
            </View>
            
            <Text variant="bodyMedium" style={{textAlign: "center"}}>{name}</Text>
        </View>
    )
}