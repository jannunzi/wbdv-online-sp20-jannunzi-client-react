import React from "react";

class HeadingWidget extends React.Component {
    state = {
        editing: false,
        widget: this.props.widget
    }
    render () {
        return(
            <div>
                {
                    !this.state.editing &&
                    <button className="float-right" onClick={() =>
                        this.setState({
                            editing: true
                        })}>
                        Edit
                    </button>
                }
                {
                    !this.state.editing &&
                    <div>
                        {this.props.widget.size === 1 && <h1>{this.props.widget.text}</h1>}
                        {this.props.widget.size === 2 && <h2>{this.props.widget.text}</h2>}
                        {this.props.widget.size === 3 && <h3>{this.props.widget.text}</h3>}
                        {this.props.widget.size === 4 && <h4>{this.props.widget.text}</h4>}
                        {this.props.widget.size === 5 && <h5>{this.props.widget.text}</h5>}
                        {this.props.widget.size === 6 && <h6>{this.props.widget.text}</h6>}
                    </div>
                }
                {
                    this.state.editing &&
                        <div>
                            <input
                                onChange={(e) => {
                                    const newTitle = e.target.value;
                                    this.setState(prevState => {
                                        prevState.widget.text = newTitle;
                                        return prevState
                                    })
                                }}
                                value={this.state.widget.text}/>
                                <span className="float-right">
                                <select
                                    onChange={(e) => {
                                        const newSize = parseInt(e.target.value);
                                        this.setState(prevState => {
                                            prevState.widget.size = newSize;
                                            return prevState
                                        })
                                    }}
                                    value={this.state.widget.size}>
                                    <option value={1}>Heading 1</option>
                                    <option value={2}>Heading 2</option>
                                    <option value={3}>Heading 3</option>
                                    <option value={4}>Heading 4</option>
                                </select>
                            <button onClick={() => {
                                this.setState(prevState => {
                                    this.props.updateWidget(this.state.widget.id, this.state.widget);
                                    return {
                                        editing: false
                                    }
                                })
                            }}>
                                Save
                            </button>
                            <button onClick={() => {
                                this.props.deleteWidget(this.props.widget.id)
                            }}>
                                Delete
                            </button>
                            <button>Up</button>
                            <button>Down</button>
                                </span>
                        </div>
                }
            </div>
        )
    }
}

export default HeadingWidget