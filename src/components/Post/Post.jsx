import styles from "./Post.module.css"
import { decode } from "html-entities";
import { motion } from "framer-motion";

// renders a single post
function Post({post}) {
    // extract data from post object
    const { title, author, num_comments, subreddit, url, is_video, thumbnail, permalink } = post.data;
    // decode the title to prevent escaped characters from being displayed
    const decodedTitle = decode(title);
    // extract the image height and width if it exists
    let imgHeight, imgWidth;
    if(post.data.preview) {
        imgHeight = post.data.preview.images[0].source.height;
        imgWidth = post.data.preview.images[0].source.width;
    }

    // declare a videoURL variable to store the video url if it exists
    let videoUrl;
    if(is_video) {
        videoUrl = post.data.media["reddit_video"]["fallback_url"];
    }

    // use the extracted data to render the Post
    // the images and videos are only rendered if they exist in the Post object
    // Post titles are links to the post on Reddit
    return (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
            <div className={ styles.post }>
                <a aria-label={"Post Link"}
                   href={"https://www.reddit.com/" + permalink}
                   target="_blank">
                    <h2 aria-label={"Post Title"}>{decodedTitle}</h2>
                </a>
                { thumbnail !== "self" && !is_video && url.includes(".jpeg") ? <img src={url} alt={title} aria-label={"Post Image"} width={imgWidth} height={imgHeight}/> : <div></div>}
                { is_video ? <video title={title} src={videoUrl} controls aria-label={"Post Video"}/> : <div></div>}
                <hr />
                <div style={{display: "flex", justifyContent: "space-between"}} aria-label={"Post Info"}>
                    <p className={styles.optional} aria-label={"Post Author"}>by {author}</p>
                    <p aria-label={"Subreddit"}>r/{subreddit}</p>
                    <p className={styles.optional} aria-label={"Number of Post Comments"}>comments: {num_comments}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Post;