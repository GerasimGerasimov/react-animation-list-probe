import { Component } from "react";

interface IListProps {
  list: Array<string>;
}

interface IListState {}

export default class TList extends Component<IListProps, IListState> {
  private pred: Array<string> = [];

  componentDidUpdate() {
    this.pred = [...this.props.list];
  }

  isNew(value: string): boolean {
    return !this.pred.includes(value) || false;
  }

  setClasses(value: string): string {
    let res = "";
    res += this.isNew(value) ? " new" : "";
    return res;
  }

  render() {
    const list = this.props.list.map((item, index) => {
      const classes = this.setClasses(item);
      return (
        <li key={item} className={classes}>
          {item}
        </li>
      );
    });
    return (
      <div>
        <ol>{list}</ol>
      </div>
    );
  }
}
