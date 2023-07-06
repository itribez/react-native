import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    color: 'black',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
});

interface HeaderProps {
  headerTitle: string;
  iconName: 'arrow-back' | 'add' | 'close' | 'menu' | 'search' | 'create-outline' ; // Add more valid icon names as needed
}

const Header: React.FC<HeaderProps> = ({ headerTitle, iconName }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => true}>
        <Ionicons name="arrow-back" size={28} color="#010101" />
      </TouchableOpacity>
      <Text style={styles.title}>{headerTitle}</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={() => true}>
        <Ionicons name={iconName} size={28} color="#010101" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
