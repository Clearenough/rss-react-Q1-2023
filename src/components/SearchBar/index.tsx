import React from 'react';
import styles from './index.module.scss';

class SearchBar extends React.Component {
  state = { inputValue: '' };

  componentDidMount() {
    const inputValue = localStorage.getItem('INPUT_VALUE');
    if (inputValue) {
      this.setState({ inputValue: inputValue });
    }
  }

  componentWillUnmount() {
    const inputValue = this.state.inputValue;
    localStorage.setItem('INPUT_VALUE', inputValue);
  }

  render() {
    return (
      <input
        type="search"
        name=""
        id=""
        value={this.state.inputValue}
        onChange={(el) => this.setState({ inputValue: el.target.value })}
        placeholder="enter text"
        className={styles.searchBar}
      />
    );
  }
}

export default SearchBar;
