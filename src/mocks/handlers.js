import { rest } from 'msw'
import * as axios from "axios"

export default [
  rest.get('/sample', async (req, res, ctx) => {
    const response = await axios.post(`https://sample.com/sample`,{
      cookies: req.cookies || {},
    }).catch(err=>{
      console.log("err in token post")
      console.log(err)

      return {data: {}}
    })
    if (response.data.token) res(ctx.cookie('token', response.data.token))
    return res(
      ctx.json(response.data)
    )
  }),
  rest.post(`/sample`, async (req, res, ctx) => {
    let reqObj = {
      ...req.body,
      cookies: req.cookies || {},
    }
    const response = await axios.post(`https://sample.com/sample`,reqObj).catch(err=>{
      console.log("err in qr post")
      console.log({err})
      return {data: {}}
    })
    return res(
      ctx.json(response.data)
    )
  }),
]

