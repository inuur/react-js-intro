function Car(props) {

    const classes = ['card']
    if (props.car.marked) {
        classes.push('marked');
    }

    return (
        <div className={classes.join(' ')} onClick={props.onMark}>
            <div className="card-img">
                <img
                    src={props.car.img}
                    alt={props.car.name}/>
            </div>
            <h3>{props.car.name}</h3>
            <p>{props.car.price}</p>
        </div>
    )
}

class App extends React.Component {

    state = {
        cars: [
            {
                marked: false,
                name: 'BMW M2 Coupe',
                price: 20000,
                img: 'https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg'
            },
            {
                marked: false,
                name: 'Audi TT',
                price: 15000,
                img: 'https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598'
            },
            {
                marked: false,
                name: 'Rolls Royce',
                price: 50000,
                img: 'data:image/jpeg;base64,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'
            },
            {
                marked: false,
                name: 'Mercedes amg coupe',
                price: 18000,
                img: 'https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2'
            }
        ]
    }

    handleMarked(name) {
        const cars = this.state.cars.concat();
        cars.map(c => c.marked = false)
        const car = cars.find(c => c.name === name)
        car.marked = !car.marked;
        this.setState({cars})
    }

    renderCars() {
        return this.state.cars.map(car => {
            return (<Car car={car} key={car.name} onMark={this.handleMarked.bind(this, car.name)}/>)
        })
    }

    render() {
        return (
            <div className="app">
                <div className="list">
                    {this.renderCars()}
                </div>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))