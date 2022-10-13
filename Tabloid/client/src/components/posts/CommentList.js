import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostByIdWithComments } from "../../modules/postManager"
import { Comment } from "./Comment"

export const CommentList = () => {
    const [postWithComments, setPostWithComments] = useState({})
    const { postId } = useParams()

    const getPostWithComments = (id) => {
        getPostByIdWithComments(id).then(data => {setPostWithComments(data)})
    };

    useEffect(() => {
        getPostWithComments(postId)
    }, []);

    if(!postWithComments){return null};
    
    return (
        <div className="container">
        <div className="row justify-content-center">
            <h3>{postWithComments.title?.toUpperCase()}</h3>
            {postWithComments.comments?.map((postComment) => (
                <Comment postComment={postComment} />
                ))}
        </div>
    </div>
    )
}