import React from "react"
import { Text, View, TouchableOpacity } from "react-native"
import styles from "../styles"
function Education() {
    return (
        <>
            <View style={styles.educations}>
                <Text style={styles.education}>
                    EDUCATION:
                </Text>
                <Text style={styles.college}> Barkatullah University Institute of Technology, [BUIT] • Bhopal, Madhya Pradesh</Text>
                {/* position */}
                <Text style={styles.field}> Bachelor of Technology in Information Technology • 2020–2024</Text>
            </View>
        </>
    )
}
export default Education