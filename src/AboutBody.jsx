import React, {Component} from 'react';
import './AboutBody.css';

class AboutBody extends Component {
    render = () =>{
        return(
            <div className="pContainer">
                {this.props.bodyContent.map((p, i)=>{
                   return(
                       <>
                       <p className="paragraph">{p}</p>
                       </>
                   ); 
                })}
            </div>
        );
    }

}
export default AboutBody;