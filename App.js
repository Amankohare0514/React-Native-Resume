import React from "react"
import { Text, View, TouchableOpacity } from "react-native"
import styles from "./styles"
function App() {
  return (
    <>
      <View style={styles.container}>
        {/* title */}
        <Text style={styles.title}>Aman Kohare</Text>

        {/* links of social media */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.link} onPress={() => handlePress("Link 1")}>
            <Text style={styles.linkText}>github.com</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link} onPress={() => handlePress("Link 2")}>
            <Text style={styles.linkText}>Linkdin.com</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link} onPress={() => handlePress("Link 2")}>
            <Text style={styles.linkText}>amankohare@gmail.com</Text>
          </TouchableOpacity>
        </View>
        {/* horizantal line */}
        <View style={styles.hr}></View>

        {/* work experience */}
        <View style={styles.firstcompany}>
          {/* heading */}
          <Text style={styles.work}> Work Experience</Text>
          {/* company */}
          <Text style={styles.company}> Sales queen software solution.</Text>
          {/* position */}
          <Text style={styles.intern}> Front-end Developer intern |  04 November, 2023 - 05 February, 2024</Text>
          {/* content */}
          <Text style={styles.content}>• Led the end-to-end development of a responsive website with HTML, CSS, and JavaScript,
            boosting responsiveness by 25%.{'\n'}
            • Significantly enhanced a dynamic web app using React.js, showcasing expertise in creating
            interactive and user-centric interfaces.{'\n'}
            • Demonstrated outstanding project management skills, consistently meeting timelines and
            exceeding client expectations.{'\n'}
            • Implemented effective version control with Git, ensuring seamless collaboration and
            resolving code conflicts efficiently in team projects.{'\n'}</Text>
        </View>

        {/* work experience */}
        <View style={styles.firstcompany}>
          {/* company */}
          <Text style={styles.company}> Code Soft.</Text>
          {/* position */}
          <Text style={styles.intern}>  Web Developer intern | 15 September, 2023 - 15 October, 2023</Text>
          {/* content */}
          <Text style={styles.content}>•  Built and maintained websites for clients through various online platforms.{'\n'}
            •  Implemented impactful UI enhancements, elevating user engagement by 60% through
            thoughtful design strategies.{'\n'}
            • Created and tested applications for websites.{'\n'}
            • Revamped the user experience by integrating advanced front-end libraries and frameworks such
            as Bootstrap and React.js, resulting in a 20% increase in user engagement.{'\n'}</Text>
        </View>

      </View >
    </>
  )
}


export default App