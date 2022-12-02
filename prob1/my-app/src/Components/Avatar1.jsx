function Avatar1(props){
    const{src,name,rounded,hidename}=props;
    const styles={
        borderRadius:"10px",
        width:"150px"
    };
    if(rounded){
        styles.borderRadius="50%";
    }
    let text=name;
    if(hidename){
        text=null;
    }
    return(
        <div>
            <img src={src} alt="prof-pic"/>
            <h3>{text}</h3>
        </div>
    )
}
export default Avatar1;