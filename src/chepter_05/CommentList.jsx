import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return (
        <div>
            <Comment name={"스테파냐 리"} Comment={"안녕하세요, 이지연 입니다."}/>
            <Comment name={"송민성"} Comment={"하이 잘지냈냐."}/>
            <Comment name={"문향진"} Comment={"리액트 진도 잘따라가서 재미있대."}/>
            <Comment name={"김민철"} Comment={"눈나 뭐행!"}/>
        </div>
    );
}


export default CommentList;

