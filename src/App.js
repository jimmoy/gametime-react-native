import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native'

export const App = () => (
  <SafeAreaView>
    <StatusBar barStyle="dark-content" />
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Text>How now, brown cow?</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
)
