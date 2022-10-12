import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody } from "reactstrap"
import { getPostById } from "../../modules/postManager"

export const PostDetail = () => {
    const [post, setPost] = useState(null)
    const { postId } = useParams()

    const getPost = (id) => {
        getPostById(id).then(data => {
            setPost(data)
        })
    }

    useEffect(() => {
        getPost(postId);
    }, []);
    if(!post){return null}
    return (
        <div className="container">
        <div className="row justify-content-center">
        <img src={post.locationImage} alt={post.title}/>
        <Card>
            <CardBody>
                <p>
                    <strong className="row justify-content-center">{post.title.toUpperCase()}</strong>
                </p>
                <p className="row justify-content-center">{post.category.name}</p>
                <p className="row justify-content-space-between">
                    <div>{post.userProfile.displayName}</div>
                    <div>{post.publishDateTime}</div>
                </p>
                <p>{post.content}</p>
                
            </CardBody>
        </Card>
        </div>
    </div>
    )
}
