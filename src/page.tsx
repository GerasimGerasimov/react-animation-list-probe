import { Component } from "react";
import TList from "./list";

interface IPageState {
  items: Array<string>;
}

const ItemsSource: Array<string> = [
  "2021-05-06",
  "2021-03-23",
  "2021-03-22",
  "2021-03-21",
  "2021-03-20",
  "2021-03-19",
  "2021-03-18",
  "2021-03-17"
];

const maxItems = 5;

export default class TPage extends Component<{}, IPageState> {
  private index: number = 0;
  constructor() {
    super({});
    this.state = {
      items: []
    };
  }

  addItem() {
    console.log("add");
    const items = [...this.state.items];
    items.unshift(ItemsSource[this.index++]);
    this.index = this.index >= ItemsSource.length ? 0 : this.index++;
    if (items.length > maxItems) {
      items.length = maxItems;
    }
    this.setState({ items });
  }

  clearItems() {
    this.index = 0;
    this.setState({ items: [] });
  }

  render() {
    return (
      <div>
        <input onClick={this.addItem.bind(this)} type="button" value="Add" />
        <input
          onClick={this.clearItems.bind(this)}
          type="button"
          value="Clear"
        />
        <TList list={this.state.items} />
      </div>
    );
  }
}
