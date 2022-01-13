import React from "react";


/* In Menu‘s render function, give <form></form> an onClick attribute. Set onClick‘s value equal to the passed-in chooseVideo function. */

/* chooseVideo is going to get passed a string: either 'fast', 'slow', 'cute', or 'eek'. It will use this string to choose a new src, which it will use to update this.state.src. */


export class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        var text = e.target.value;
        this.props.chooseVideo(text);
    }


    render() {
        return (
            <form onClick={this.handleClick}> 
                <input type="radio" name="src" value="fast" /> fast
                <input type="radio" name="src" value="slow" /> slow
                <input type="radio" name="src" value="cute" /> cute
                <input type="radio" name="src" value="eek" /> eek
            </form>
        )
    }
}