import React, {Component} from 'react';
import Jumbotron from "./Jumbotron";
import Table from "./Table/Table";
import axios from 'axios'
class Home extends Component {
    constructor(){
        super()

        this.state = {
            course_modules: [
                { id: 1, title: 'КАТОК «ЛЕДОГРАД»', description: 'Главные достоинства: расположение и качество!', active: false },
                { id: 2, title: 'КАТОК «БОЛЬШОЙ»', description: 'Он находится аккурат возле кинотеатра с одноименным названием. Прокатиться там можно на свежем воздухе только в холодное время года.', active: false },
                { id: 3, title: 'КАТОК «ICE ARENA»', description: 'Это крытый ледовый комплекс, что означает: кататься можно в любую погоду, вне зависимости от того, снег на дворе или дождь. ', active: false },
                { id: 4, title: 'КАТОК «ОСЬМИНОЖЕК»', description: 'Находится в Северном жилом массиве, на территории одноименного аквапарка. Бывалые говорят, что на катке действует безлимит! ', active: false },
            ]
        }
    }

    handleVideoChenge(item, event) {
        event.preventDefault()

        let course_modules = [...this.state.course_modules]

        course_modules.map( (data) => {
            data.active = false
        } )

        item.active = !item.active

        course_modules[item - 1] = item

        this.setState({course_modules})
    }

    render() {
        return(
            <div>
                <Jumbotron/>
                <Table handleVideoChenge={this.handleVideoChenge.bind(this)} course_modules={this.state.course_modules}/>
            </div>
        )
    }
}

export default Home