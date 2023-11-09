

function Text({text, tailClass, event}) {
    return (  
        <span className={tailClass} onClick={ (e) => event}>{text}</span>
    );
}

export default Text;