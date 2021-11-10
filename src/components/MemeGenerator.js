import React from 'react';

class MemeGenerator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }
    
    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data;
                console.log(memes[0]);
                this.setState({allMemeImgs: memes})
            })

    }
    
    render() {
        return(
            <div>
                <h1>MEME GENERATOR SECTION</h1>
            </div>
        )
    }
    
}

export default MemeGenerator;