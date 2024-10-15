// components/EmbeddedTweet.js
import { TwitterTweetEmbed } from 'react-twitter-embed';

const EmbeddedTweet = ({ tweetId }) => {
    const handleRetweet = () => {
        const retweetUrl = `https://twitter.com/intent/retweet?tweet_id=${tweetId}`;
        window.open(retweetUrl, '_blank');
    };

    return (
        <div>
            <TwitterTweetEmbed tweetId={tweetId} />
            {/* Button to retweet */}
            <div
                style={{
                    display: 'flex',    // Flexbox to center the button
                    justifyContent: 'center',  // Centers the button horizontally
                    // marginTop: '10px',  // Adds space between tweet and button
                    marginBottom: '10px',
                }}
            >
                <button onClick={handleRetweet}
                    style={{
                        // marginTop: '10px',
                        marginBottom: '10px',
                        padding: '10px 15px',
                        backgroundColor: '#1DA1F2',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    Repost Message
                </button>
            </div>
        </div>
    );
};

export default EmbeddedTweet;