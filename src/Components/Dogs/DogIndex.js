import React, {Component} from 'react';

export default class DogIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
        };
        this.getDog = this.getDog.bind(this);
    };

    getDog() {
        console.log('Component Mounted')

        fetch(`https://dog.ceo/api/breeds/image/random/.json`)
        .then((res) => res.json())
        .then((data) => (this.setState({img: data.message})))
        .catch(error => console.log("This error:", error))
    };
    
    componentDidMount() {
        this.getDog();
    }
   
    render() {
        return(
            <div>
                <h4>Randomize</h4>
                <button onClick={this.getDog}>Fetch the Random Dog</button>
                <br/><br/>
                <img src={this.state.img} alt="dog" size="100px"/>
            </div>
        )
    }


    
}