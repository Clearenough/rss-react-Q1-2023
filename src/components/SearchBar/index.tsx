import React from 'react';

// interface SearchBarProps {}

// interface SearchBarState {}

class SearchBar extends React.Component {
  state = { inputValue: '' };

  componentDidMount() {
    const inputValue = localStorage.getItem('INPUT_VALUE');
    console.log(localStorage, 'mount');
    if (inputValue) {
      this.setState({ inputValue: inputValue });
    }
  }

  componentWillUnmount() {
    const inputValue = this.state.inputValue;
    localStorage.setItem('INPUT_VALUE', inputValue);
    console.log(localStorage, 'unmount');
  }

  onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    this.setState({ inputValue });
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
      />
    );
  }
}

export default SearchBar;
