import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

export const Performers = ({performers}) => {
  return performers.map((performer, index) => (
    <View key={performer.id} style={styles.container}>
      <Text style={styles.name}>Performer: {performer.name}</Text>
      <Text style={styles.abbreviation}>
        {performer.abbreviation}
      </Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: performer.hero_image_url,
          }}
        />
      </View>
    </View>
  ))
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    resizeMode: 'contain',
  },
  name: {
    color: '#eeeeee',
  },
  abbreviation: {
    color: '#eeeeee',
  },
})
