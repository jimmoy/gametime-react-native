import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export const Event = ({event}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{event.datetime_local}</Text>
      <Text style={styles.name}>{event.name}</Text>
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
