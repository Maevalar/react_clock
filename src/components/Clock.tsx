import React, { ReactNode } from 'react';

type State = {
  today: Date;
};

type Props = {
  clockName: string;
};

export class Clock extends React.Component<Props> {
  state: State = {
    today: new Date(),
  };

  timerId = 0;

  // This code starts a timer
  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() }, () => {
        // eslint-disable-next-line no-console
        console.log(this.state.today.toUTCString().slice(-12, -4));
      });
    }, 1000);
  }

  // this code stops the timer
  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render(): ReactNode {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
