// const myrequest=({
//   url,
//   params,
//   method="post"
// })=>{
//   let server ='http://lzapi.lll1.vip:3000/'
//   return wx.request({
//     url: server+url,
//     data:params,
//     method=method,
//     success(res){
//       console.log(res)
//     },
//     fail(err){
//       console.log(err)
//     }
//   })
// }
const myrequest = ({
  url='',
  params={},
  method = "post"
}) => {
  let server = 'http://lzapi.lll1.vip:3000/'
  return wx.request({
    url: server + url,
    data: params,
    method:method,
    success(res) {
      console.log(res)
    },
    fail(err) {
      console.log(err)
    }
  })
}
export default myrequest