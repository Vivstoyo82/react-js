import './Card.css';

function Card(props)
{
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div> // props.children kya karega jo bhi data hai ho open or closing tag ke bich main daal dega
}

export default Card;