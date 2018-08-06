import React, {Component} from 'react';
import PlaceMark from './PlaceMark';

class PlaceInventory extends Component {
    //Constructor
    constructor(props) {
        super(props);
        this.state = {
            'places': '',
            'query': '',
            'suggestions': true,
            'condition': false
        };

        this.filterLocations = this.filterLocations.bind(this);
    }

    // Filter Places based on user query
    
    filterLocations(event) {
        this.props.closeInfoWindow();
        const {value} = event.target;
        let places = [];
        this.props.allplaces.forEach(function (place) {
            if (place.longname.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                place.marker.setVisible(true);
                places.push(place);
            } else {
                place.marker.setVisible(false);
            }
        });

        this.setState({
            'places': places,
            'query': value
        });
    }

    componentWillMount() {
        this.setState({
            'places': this.props.allplaces
        });
    }

   // Show and hide suggestions    
    handleClick() {
        this.setState({
            'condition': !this.state.condition
          });
    }

    // Render function of PlaceInventory
    
    render() {
        let PlaceInventory = this.state.places.map(function (listItem, index) {
            return (
                <PlaceMark key={index} openInfoWindow={this.props.openInfoWindow.bind(this)} data={listItem}/>
            );
        }, this);

        return (
            <div className="search">
                <input role="search" aria-labelledby="filter" id="search-field" className="search-field" type="text" placeholder="Filter" value={this.state.query} onChange={this.filterLocations}/>
                <ul className={ this.state.condition ? "button-toggled" : "b" }>
                    {this.state.suggestions && PlaceInventory}
                </ul>
                <button className="button" onClick={(e) => this.handleClick(e)} className={ this.state.condition ? "placement-toggled button" : "b button" }>Show/Hide Suggestions</button>
            </div>
        );
    }
}

export default PlaceInventory;