// components/EmbeddedFacebookPost.js
import { useEffect } from 'react';

const EmbeddedFacebookPost = ({ postUrl }) => {
    useEffect(() => {
        // Once Facebook SDK is loaded, it will process the embed
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    }, [postUrl]);

    return (
        <div>
            {/* Facebook post embed element */}
            <div
                className="fb-post"
                data-href={postUrl}
                data-width="500"
                style={{
                    margin: '0 auto', // Center the embedded post
                }}
            ></div>
        </div>
    );
};

export default EmbeddedFacebookPost;