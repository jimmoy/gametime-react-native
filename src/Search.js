import React, {useCallback, useEffect, useRef, useState} from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'
import {debounce} from 'debounce'

const queryUrl = query => {
  const prefix = 'https://mobile-staging.gametime.co/v1/search'
  const url = `${prefix}?q=${encodeURIComponent(query)}`
  return url
}

export const Search = ({onResults}) => {
  const [query, setQuery] = useState('')

  const submitQuery = useCallback(async text => {
    if (!text || !onResults) {
      onResults({})
      return
    }
    try {
      const response = await fetch(queryUrl(text))
      const json = await response.json()
      onResults(json)
    } catch (error) {
      console.error('Error on fetch: ', error)
    }
  }, [])

  const debouncedSubmit = useRef(debounce(submitQuery, 500))

  useEffect(() => {
    debouncedSubmit.current(query)
  }, [query])

  return (
    <View style={styles.background}>
      <View style={styles.field}>
        <View style={styles.glass} />
        <TextInput
          style={styles.input}
          value={query}
          onChangeText={setQuery}
          placeholder="Team, performer or venue"
        />
        <View style={styles.clear} />
      </View>
      <View style={styles.cancel}>
        <Text>CANCEL</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: 20,
    backgroundColor: '#dddddd',
  },
  input: {
    color: '#222222',
  },
  glass: {},
  clear: {},
  cancel: {},
})
