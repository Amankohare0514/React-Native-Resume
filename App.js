import React from "react"
import { SafeAreaView, ScrollView, Text, View } from "react-native"
import styles from "./styles"
import Projects from "./components/projects"
import Experience from "./components/experience"
import Links from "./components/links"
import Education from "./components/education"
import Skills from "./components/skills"
function App() {
  return (
    <>
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.title}>Aman Kohare</Text>
          <Text style={styles.adress}>Khargone, Madhya Pradesh, India, 451220 | +91 6268518514</Text>
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
      </SafeAreaView>
    </>
  )
}


export default App