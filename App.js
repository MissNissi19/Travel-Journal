import React from "react"
import ReactDOM from "react-dom"
import data from "./data.js"
import Hero from "./Hero"
import Experience from "./Experience"


export default function App() {
    let experienceArray = data.map(function(item){
        
        return (
            <Experience
                key={item.id}
                img = {item.imageUrl} 
                location = {item.location}
                googleMapsUrl ={item.googleMapsUrl}
                title = {item.title} 
                startDate = {item.startDate}
                endDate = {item.endDate}
                description = {item.description}
             />
        )
    })
      
    return (
        <div>
            <Hero />
            {experienceArray}
        </div>
    )
}