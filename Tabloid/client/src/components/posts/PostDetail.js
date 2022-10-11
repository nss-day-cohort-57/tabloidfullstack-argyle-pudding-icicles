import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody } from "reactstrap"
import { getPostById } from "../../modules/postManager"

export const PostDetail = () => {
    const [post, setPost] = useState([])
    const { postId } = useParams()

    const getPost = (id) => {
        getPostById(id).then(post => {
            const singlePost = post[0]
            setPost(singlePost)
        })
        console.log(post)
    }

    useEffect(() => {
        getPost();
    }, [postId]);

    return (
        <div className="container">
        <div className="row justify-content-center">
        <Card>
            <CardBody>
                <p>
                    <strong>Post: {post.title}</strong>
                </p>
                <p>{post.imageLocation}</p>
                <p>Content: {post.content}</p>
                <p>Publication Date: {post.publishDateTime}</p>
                
            </CardBody>
        </Card>
        </div>
    </div>
    )
}
