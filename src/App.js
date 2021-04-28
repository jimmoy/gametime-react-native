import React, {useState} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'
import {isEmpty} from 'ramda'

import {Event} from './Event'
import {Performers} from './Performers'
import {Search} from './Search'
import {Space} from './Space'
import {Venue} from './Venue'

export const App = () => {
  const [queryResults, setQueryResults] = useState({})

  return (
    <SafeAreaView style={styles.background}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.scroll}
      >
        <Space n={2} />
        <Search onResults={setQueryResults} />

        {!isEmpty(queryResults) &&
          queryResults.events.map((event, index) => (
            <View key={event.id}>
              <Event event={event.event} />
              <Performers performers={event.performers} />
              <Venue venue={event.venue} />
              <Space n={1} />
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scroll: {},
})
