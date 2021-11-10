import React from 'react';

class MemeGenerator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    
    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data;
                this.setState({allMemeImgs: memes})
            });
    };

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        });
    };

    handleSubmit(event) {
        event.preventDefault();

        const randomNumber = Math.floor(Math.random() * this.state.allMemeImgs.length);
        const randomMemeImg = this.state.allMemeImgs[randomNumber].url;
        this.setState({ randomImg: randomMemeImg })
    }
    
    render() {
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input // Top text\
                        className="input-form"
                        type='text' 
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText} 
                        onChange={this.handleChange}
                        />

                    <input // Bottom Text
                        className="input-form"
                        type='text' 
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText} 
                        onChange={this.handleChange}
                        />

                    <button>Generate</button>
                </form>
                <div className="meme">  
                    <img className="meme-img" src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
    
}

export default MemeGenerator;