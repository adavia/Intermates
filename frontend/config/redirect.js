export default (target, ctx = {}) => {
  if (ctx.res) {
    ctx.res.writeHead(303, { Location: target })
    ctx.res.end()
    ctx.res.finished = true
  }
}