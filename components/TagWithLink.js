import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';

const TagWithLink = ({ label, link }) => {
  const handlePress = () => {
    // Open the link when the tag is pressed
    Linking.openURL(link);
  };

  return (
    <TouchableOpacity style={styles.tag} onPress={handlePress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tag: {
    backgroundColor: '#007bff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    margin: 5,
  },
  label: {
    color: '#fff',
    fontSize: 16,
  },
});

export default TagWithLink;
