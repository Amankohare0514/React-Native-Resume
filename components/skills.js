import { View, Text } from "react-native";
import styles from "../styles";

function Skills() {
    return (
        <View style={styles.skills}>
            <Text style={styles.skill}>SKILLS:</Text>
            <Text style={styles.programmin}> • Programming Languages - Javascript / Typescript </Text>
            <Text style={styles.programmin}> • Frontend Technologies - Html5, Css3, React.js/Next.js, Bootstrap/Tailwind</Text>
            <Text style={styles.programmin}> • Backend Technologies - Node.js, Express.js, Sanity.io, MongoDB, Firebase  </Text>
            <Text style={styles.programmin}> • Developer Tools - Linux, Redux, Github, Canva, Insomnia/Postman, Figma </Text>
        </View>
    )
}
export default Skills