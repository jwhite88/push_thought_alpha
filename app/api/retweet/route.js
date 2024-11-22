import { TwitterApi } from 'twitter-api-v2';
import { NextResponse } from 'next/server'

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const bearer = new TwitterApi(process.env.BEARER_TOKEN);

const twitterClient = client.readWrite;
const twitterBearer = bearer.readOnly;

// module.exports = { twitterClient, twitterBearer };


// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { tweetId } = req.body;
//     console.log("print the tweet id")
//     console.log(tweetId)
//     try {
//       await client.v2.retweet(process.env.TWITTER_USER_ID, tweetId);
//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ success: false, error: error.message });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }

export async function POST(request) {
  // console.log("Made it to the server!!!!!!!!!!!!!!")

  const { tweetId } = await request.json();

  // console.log(tweetId)

  if (!tweetId) {
    return NextResponse.json({ error: 'Tweet ID is required' }, { status: 400 });
  }

  try {
    await twitterClient.v2.retweet(process.env.TWITTER_APP_ID, tweetId);
    // await client.v2.retweet(process.env.TWITTER_CLIENT_ID, tweetId);
    // 1. success message
    // 2. save action to database
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Retweet Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}