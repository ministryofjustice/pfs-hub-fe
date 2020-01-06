import React from 'react'
import { format } from 'date-fns'

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.getNewDate(new Date())
    }

    getNewDate(dateObject) {
        return {
            dateString: format(dateObject, 'iiii d LLLL'),
            timeString: `${format(dateObject, 'h:mm')}${format(dateObject, 'a').toLowerCase()}`,
        }
    }

    tick() {
        this.setState(this.getNewDate(new Date()));
    }

    UNSAFE_componentWillMount() {
        this.timerId = setInterval(
          () => this.tick(),
          1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
        <div className="top-bar-time">
            <span>{this.state.dateString}</span>
            <span>{this.state.timeString}</span>
        </div>
        );
    }
}

export default Clock
