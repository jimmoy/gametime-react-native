import React from 'react'
import {View} from 'react-native'

const Spacer = props => {
  const width = props.axis === 'vertical' ? 1 : props.size
  const height = props.axis === 'horizontal' ? 1 : props.size
  return (
    <View
      style={{
        width,
        height,
      }}
    />
  )
}

export const SpaceH = props => (
  <Spacer
    axis="horizontal"
    size={props.n * 8}
    style={props.style}
    {...props.rest}
  />
)

export const SpaceV = props => (
  <Spacer
    axis="vertical"
    size={props.n * 8}
    style={props.style}
    {...props.rest}
  />
)

export const Space = props => (
  <Spacer size={props.n * 8} style={props.style} {...props.rest} />
)

