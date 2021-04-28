import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export const Venue = ({venue}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{venue.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  name: {
    color: '#eeeeee',
  },
})
