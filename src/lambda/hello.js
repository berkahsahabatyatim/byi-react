import axios from "axios"
const { NETLIFY_NEXT_MIDTRANS, NETLIFY_NEXT_MIDTRANS_STAG } = process.env

export async function handler(event, context, callback) {
  const url = event.queryStringParameters['url'];
  const isProd = `${url}`.includes("sandbox") === false
  let token = NETLIFY_NEXT_MIDTRANS_STAG
  if (isProd) token = NETLIFY_NEXT_MIDTRANS
  const body = JSON.parse(event.body);
  const headerz = {
    'Authorization': `Basic ${token}`,
    'Content-Type': 'application/json',
  }
  console.log(`body ${JSON.stringify(body)}`)
  console.log(`headers ${JSON.stringify(event.headers)}`);
  console.log(`pake ${JSON.stringify(headerz)}`);
  const response = await axios.post(url,
    body,
    {
      headers: headerz
    })
  callback(null, {
    statusCode: response.status,
    body: JSON.stringify(response.data),
  })
}
