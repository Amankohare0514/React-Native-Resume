import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';

const TagWithLink = ({ label, link }) => {
  const handlePress = () => {
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
    backgroundColor: '#f0f0f0',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    margin: 3,
   
  },
  label: {
    color: '#000',
    fontSize: 11,
  },
});

export default TagWithLink;
