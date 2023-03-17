import React from 'react';

interface IProps {
  imageUrl: string;
  name: string;
  price: number;
}

interface IState {
  count: number;
}

class Card extends React.Component<IProps, IState> {
  state: IState = { count: 1 };

  constructor(props: IProps) {
    super(props);
  }

  increaseCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const count = this.state.count;
    this.setState({ count: count + 1 });
  };

  decreaseCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const count = this.state.count;
    if (count === 0) return;
    this.setState({ count: count - 1 });
  };

  render() {
    return (
      <div className="card">
        <img src={this.props.imageUrl} alt="" />
        <div>
          <span>{this.props.name} </span>
          <span>total price: {this.state.count * this.props.price}</span>
        </div>
        <div>
          <button onClick={this.decreaseCount}> - </button>
          <span>{this.state.count}</span>
          <button onClick={this.increaseCount}> + </button>
        </div>
      </div>
    );
  }
}

export default Card;
