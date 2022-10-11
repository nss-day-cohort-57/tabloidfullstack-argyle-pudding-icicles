import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody } from "reactstrap"
import { getPostById } from "../../modules/postManager"

export const PostDetail = () => {
    const [post, setPost] = useState([])
    const { postId } = useParams()

    const getPost = (id) => {
        getPostById(id).then(data => {
            setPost(data)
        })
    }

    useEffect(() => {
        getPost(postId);
    }, []);
    
    {console.log(post)}
    return (
        <div className="container">
        <div className="row justify-content-center">
        <img src='{postObject.locationImage}' alt={post.title}/>
        <Card>
            <CardBody>
                <p>
                    <strong>Post: {post.title}</strong>
                </p>
                <p>Content: {post.content}</p>
                <p>Publication Date: {post.publishDateTime}</p>
                
            </CardBody>
        </Card>
        </div>
    </div>
    )
}
