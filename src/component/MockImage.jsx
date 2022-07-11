const MockImage = (props) => {
    const source = 'https://picsum.photos/' + props.size;

    return (
        <img src={source} alt={props.alt} className={props.class} />  
    );
};

export default MockImage;
