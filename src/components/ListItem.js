import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  descriptionStyle: {
    paddingLeft: 15,
    flex: 1,
  },
});

type Library = {
  id: Number,
  title: String,
  description: String,
};

type Props = {
  selectLibrary: Function,
  library: Library,
  expanded: Boolean,
};

class ListItem extends Component<Props> {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={styles.descriptionStyle}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
    return null;
  }

  render() {
    const { library, selectLibrary } = this.props;
    const { id, title } = library;
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback
        onPress={() => selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = ownProps.library.id === state.selectedLibraryId;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
