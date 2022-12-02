function Avatar(props) {
    const { src, name, rounded } = props;
    const styles = {
      borderRadius: "10px",
      width: "150px"
    };
  
    if (rounded) {
      styles.borderRadius = "50%";
    }
  
    return (
      <div>
        <img src={src} alt="prof-pic" style={styles} />
        <h3>{name}</h3>
      </div>
    );
  }
  
  export default Avatar;
  