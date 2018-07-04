import React from 'react';
import ListListing from './ListListing'
import { fetchBoard } from '../../actions/BoardActions'
import PropTypes from 'prop-types'

export default class ListListContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    let id = this.props.match.params.id
    let store = this.context.store;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    });

    store.dispatch(fetchBoard(id))
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    let id = this.props.match.params.id;
    let store = this.context.store;
    let lists = store.getState().lists.filter(list => list.board_id === +id);

    return(
      <ListListing
        lists={lists}
      />
    );
  }
}