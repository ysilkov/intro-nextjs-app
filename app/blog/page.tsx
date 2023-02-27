import Link from "next/link";
import { getAllPost } from "../lib/cms";

export default async function Blog() {
    const posts = await getAllPost();

    return(
    <div className="">
        {
            posts.map(post =>
                <div className="">
<Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </div>
            )
        }
    </div>
    )

}