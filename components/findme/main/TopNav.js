import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';

export default function TopNav({ page, goPage }) {

  return (
    <View style={styles.findMeNav}>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => goPage('all')}
          style={[styles.navButton, page === 'all' && styles.navButtonSelected]}
        >
          <Text
            style={[styles.navButtonText, page === 'all' && styles.navButtonTextSelected]}
          >
            전체
            </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => goPage('find')}
          style={[styles.navButton, page === 'find' && styles.navButtonSelected]}
        >
          <Text
            style={[styles.navButtonText, page === 'find' && styles.navButtonTextSelected]}
          >
            찾아주세요
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => goPage('notfound')}
          style={[styles.navButton, page === 'notfound' && styles.navButtonSelected]}
        >
          <Text
            style={[styles.navButtonText, page === 'notfound' && styles.navButtonTextSelected]}
          >
            아직 못찾았어요
        </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => goPage('found')}
          style={[styles.navButton, page === 'found' && styles.navButtonSelected]}
        >
          <Text
            style={[styles.navButtonText, page === 'found' && styles.navButtonTextSelected]}
          >
            찾았어요
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  findMeNav: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 10,
  },
  btnContainer: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
  },
  navButton: {
    height: '100%',
    justifyContent: 'center',
  },
  navButtonSelected: {
    borderBottomColor: '#000000',
    borderBottomWidth: 2.5,
  },
  navButtonText: {
    fontSize: 14,
    color: '#121212',
    opacity: 0.6,
  },
  navButtonTextSelected: {
    fontSize: 15,
    fontWeight: '900',
    opacity: 1,
  },
});