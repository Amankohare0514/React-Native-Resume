import React from "react"
import { ScrollView, Text, View } from "react-native"
import styles from "./styles"
import Projects from "./components/projects"
import Experience from "./components/experience"
import Links from "./components/links"
import Education from "./components/education"
import Skills from "./components/skills"
function App() {
  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.title}>Aman Kohare</Text>
          <Links />
          <View style={styles.hr}></View>
          <Experience />
          <View style={styles.hr}></View>
          <Projects />
          <View style={styles.hr}></View>
          <Education />
          <View style={styles.hr}></View>
          <Skills/>
          <View style={styles.hr}></View>
        </View >
      </ScrollView>
    </>
  )
}


export default App