import React from "react";
import {connect} from "react-redux";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/PararagraphWidget";
import {
    findAllWidgets,
    createWidget,
    deleteWidget,
    updateWidget,
    findWidgetsForTopic
} from "../../services/WidgetService";

class WidgetList extends React.Component {
    state = {
        editingWidgetId: '',
        widget: {
            id: ''
        }
    }
    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.topicId);
        // this.props.findAllWidgets();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.topicId !== this.props.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId);
        }
    }

    saveWidget = (widget) => {
        this.setState({
            editingWidgetId: ''
        })
        this.props.updateWidget(widget.id, widget)
    }

    render(){
        return(
            <div>
                <h1>{this.props.topicId}</h1>
                {
                    this.props.widgets && this.props.widgets.length > 0 && this.props.widgets.map(widget =>
                        <div key={widget.id}>
                            {widget.type === "HEADING"   && <HeadingWidget   saveWidget={this.saveWidget} editing={this.state.widget.id === widget.id} {...this.props} widget={widget}/>}
                            {widget.type === "PARAGRAPH" && <ParagraphWidget updateWidget={this.updateWidget} editing={this.state.widget.id === widget.id} widget={widget}/>}
                            <span>
                                {   this.state.editingWidgetId !== widget.id &&
                                    <button onClick={
                                        () => this.setState({
                                        editingWidgetId: widget.id,
                                        widget: widget
                                    })}>
                                        Edit
                                    </button>
                                }
                                {   this.state.editingWidgetId === widget.id &&
                                    <span>
                                        <button onClick={() => {
                                            this.props.deleteWidget(widget.id)
                                        }}>
                                            Delete
                                        </button>
                                        <button>Up</button>
                                        <button>Down</button>
                                        <select onChange={(e) => {
                                            const newType = e.target.value
                                            this.setState(prevState => {
                                                this.state.widget.type = newType;
                                                return {
                                                    widget: {
                                                        ...widget, type: newType
                                                    }
                                            }})
                                            this.props.updateWidget(this.state.widget.id, this.state.widget)
                                        }}
                                                value={this.state.widget.type}>
                                            <option value="HEADING">Heading</option>
                                            <option value="PARAGRAPH">Paragraph</option>
                                            <option value="YOUTUBE">YouTube</option>
                                            <option value="HTML">HTML</option>
                                        </select>
                                    </span>
                                }
                            </span>
                        </div>
                    )
                }
                <div>
                    <button
                        onClick={
                            () =>
                            this.props.createWidget(this.props.topicId)}>
                        Create Widget
                    </button>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets
})

const dispatchToPropertyMapper = (dispatcher) => ({
    findWidgetsForTopic: (topicId) =>
        findWidgetsForTopic(topicId)
            .then(widgets => dispatcher({
                type: "WIDGET_FOR_TOPIC",
                widgets: widgets
            })),
    updateWidget: (widgetId, newWidget) =>
        updateWidget(widgetId, newWidget)
            .then(status => dispatcher({
                type: "UPDATE",
                widget: newWidget
            })),
    deleteWidget: (widgetId) =>
        deleteWidget(widgetId)
            .then(status => dispatcher({
                type: 'DELETE_WIDGET',
                widgetId: widgetId
            })),
    createWidget: (topicId) =>
        createWidget(topicId, {
            title: "New Widget",
            type: "HEADING"
        })
            .then(actualWidget => dispatcher({
                type: "ADD_WIDGET",
                widget: actualWidget
            })),
    findAllWidgets: () =>
        findAllWidgets()
            .then(actualWidgets => dispatcher({
                type: "FIND_ALL_WIDGETS",
                widgets: actualWidgets
            }))
})

export default connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(WidgetList)
