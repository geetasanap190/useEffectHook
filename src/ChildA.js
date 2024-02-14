import React , {memo} from "react";

function ChildA({learning}){
    console.log("child");
    return(
        <>
        <p>Calling child componant</p>
        </>
    );
}
export default memo(ChildA);