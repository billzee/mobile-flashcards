import React, { Component } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { Row, StyledText, Bold } from '../components/styled'
import Button from '../components/Button'

import { connect } from 'react-redux'
import StyledTextInput from '../components/StyledTextInput'
import { addCard } from '../actions/cards'

const Container = styled(View)`
  justify-content: center;
  align-items: stretch;
  padding: 10px;
  flex: 1;
`

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  static navigationOptions = {
    title: 'Add a new card',
  }

  componentDidMount() {}

  render() {
    const { answer, question } = this.state
    const { addCard, deck } = this.props

    return (
      <Container>
        <StyledText center>
          Adding a new card to <Bold>{deck.title}</Bold>
        </StyledText>

        <Row>
          <StyledTextInput
            style={{ marginBottom: 15 }}
            value={question}
            label="Question"
            onChangeText={question => this.setState({ question })}
          />
        </Row>
        <Row>
          <StyledTextInput
            style={{ marginBottom: 15 }}
            value={answer}
            label="Answer"
            onChangeText={answer => this.setState({ answer })}
          />
        </Row>

        <Row>
          <Button
            style={{ flex: 1 }}
            onPress={() => addCard({ question, answer }, deck.id)}
          >
            Add
          </Button>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = ({ decks }, { navigation }) => {
  const deck = decks[navigation.state.params.deckId]
  return {
    deck,
  }
}

export default connect(
  mapStateToProps,
  { addCard },
)(AddCard)