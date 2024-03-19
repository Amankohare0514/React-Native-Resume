import React from "react"
import { ScrollView, Text, View, TouchableOpacity } from "react-native"
import styles from "../styles"
import TagWithLink from "./TagWithLink"
function Links() {
    return (
        <>
        <View style={styles.row}>
        <TagWithLink label="Github.com" link="https://github.com/Amankohare0514" />
        <TagWithLink label="Linkedin.com" link="https://www.linkedin.com/in/aman-kohare-3a0678235/" />
        <TagWithLink label="Portfolio" link="https://heyaman.vercel.app/" />
        <TagWithLink label="Leetcode" link="https://leetcode.com/aman__0514/" />
        <TagWithLink label="Gmail.com" link="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKhpkMkKCMKHRSKBnHLzXMxtltFPSPJKPSFWMJTpxqtBXFkNmRcgdlnRbXlDpltNxgrbhhP" />
        </View>
        </>
    )
}
export default Links

