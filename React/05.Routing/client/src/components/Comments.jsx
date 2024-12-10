import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Comments() {
    const [comments, setComments] = useState([]);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        async function getComments() {
            const response = await fetch('http://localhost:3030/jsonstore/blog/comments');
            const result = await response.json();
            const postComments = Object.values(result).filter((comment) => comment.postId == id);
            console.log(postComments);
            setComments(postComments);
        }
        getComments();
    }, []);
    return (
        <div className="mt-5">
            {comments.map((comment, i) => (
                <p key={comment.id} className="mt-1 text-sm/7 text-gray-700 sm:col-span-2 sm:mt-0">
                    {`${i + 1}. ${comment.text}`}
                </p>
            ))}
        </div>
    );
}
