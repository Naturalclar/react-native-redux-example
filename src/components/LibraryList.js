// @flow
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

type Library = {
  id: Number,
  title: String,
  description: String,
};

type Props = {
  libraries: Array<Library>
};

class LibraryList extends Component<Props> {
  componentWillMount() {
    const { libraries } = this.props;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => (r1 !== r2),
    });

    this.dataSource = ds.cloneWithRows(libraries);
  }

  renderRow(library) {
    return <ListItem library={library}/>;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => (
  { libraries: state.libraries }
);

export default connect(mapStateToProps)(LibraryList);
