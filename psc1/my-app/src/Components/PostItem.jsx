import  "./post.css";
function PostItem({title,body}){
    return (
//    <div style={{border:"1px solid yellow",margin:"5px"}}>
<div className="myPost">
    <h4>{title}</h4>
    <p>{body}</p>
    </div>
    )
    }
    export default PostItem;