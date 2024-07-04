import { Tabs } from "expo-router"
import React from "react"

export default() => {
    return(
        <Tabs>
            <Tabs.Screen 
                name = "recent"
                options={{
                    title: "Recent"
                }} 
            />
            <Tabs.Screen 
                name = "home"
                options={{
                    title: "Home"
                }} 
            />
             <Tabs.Screen 
                name = "list"
                options={{
                    title: "List"
                }} 
            />

        </Tabs>
    )
}