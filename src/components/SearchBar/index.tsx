import React from 'react';

// interface SearchBarProps {}

// interface SearchBarState {}

class SearchBar extends React.Component {
  state = { searchText: '' };
  render() {
    return (
      <input
        type="search"
        name=""
        id=""
        value={this.state.searchText}
        onChange={(el) => this.setState({ searchText: el.target.value })}
      />
    );
  }
}

export default SearchBar;
