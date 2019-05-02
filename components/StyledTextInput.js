import React from 'react'
import { View, TextInput } from 'react-native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import { white, brown } from '../utils/colors'
import { StyledText } from '../components/styled'

const StyledTextInputComponent = styled(TextInput)`
  font-size: 20;
  padding-left: 10;
  height: 60;
  border-radius: 5;
  border-color: ${white};
  background: ${brown};
  color: ${white};
  border-width: 1;
`

export default function StyledTextInput({ label, ...rest }) {
  return (
    <View style={{ flex: 1 }}>
      <StyledText bold color="brown">
        {label}
      </StyledText>

      <StyledTextInputComponent {...rest} />
    </View>
  )
}

StyledTextInput.propTypes = {
  label: PropTypes.string.isRequired,
}