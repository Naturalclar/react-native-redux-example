import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    const { library } = this.props;
    const { titleStyle } = styles;
    return (
      <CardSection>
        <Text style={titleStyle}>{library.title}</Text>
      </CardSection>
    )
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

export default ListItem;