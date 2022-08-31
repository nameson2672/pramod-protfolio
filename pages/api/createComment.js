import sanityClient from '@sanity/client'
const config = {
  dataset: process.env.SANITY_STUDIO_API_DATASET,
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  token: process.env.SANITY_API_TOKEN,
}
const client = sanityClient(config)

export default async function createComment(req, res) {
  const { _id, name, email, comment} = JSON.parse(req.body)
  console.log('Running from backend');
  console.log(req.body);
  try {
    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      comment
    })
  } catch (err) {
    console.log('error')
    console.error(err)
    return res.status(500).json({sucess:false, message: `Couldn't submit comment`, err})
  }
  return res.status(200).json({sucess:true, message: 'Comment submitted' })
}
