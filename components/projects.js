import React from "react"
import { Text, View } from "react-native"
import styles from "../styles"
function Projects() {
    return (
        <>
            {/* RELEVANT PROJECTS: */}
            < View style={styles.projects} >
                <Text style={styles.project}> RELEVANT PROJECTS:</Text>
                <Text style={styles.projectTitle}> Reform</Text>
                <Text style={styles.projectSkill}> Next.js, Typescript, Node.js, PostgreSQL • July 2023 - Oct 2023</Text>
                <Text style={styles.content}>• Championed the inception of an intuitive form platform, mastering Full Stack dynamics.{'\n'}
                    • Elevated form creation with a cutting-edge Webflow feature, ensuring seamless sharing.{'\n'}
                    • Crafted and shared captivating forms seamlessly, leveraging Webflow's prototype
                    prowess, leading to a 15% uptick in user engagement.
                </Text>
            </View >

            <View style={styles.projects}>
                <Text style={styles.projectTitle}> My_tube</Text>
                <Text style={styles.projectSkill}> React.js, Redux, Tailwind • Jan 2023 - March 2023</Text>
                <Text style={styles.content}>• Led the development of My_tube, an advanced YouTube clone, implementing robust
                    authentication for heightened security measures.{'\n'}
                    • Enhanced user experience through the seamless integration of dynamic dark and light
                    modes on My_tube.{'\n'}
                    • Drove My_tube's success by pioneering industry-leading UI design, creating an intuitive
                    and visually captivating platform.
                </Text>
            </View>
        </>
    )
}
export default Projects