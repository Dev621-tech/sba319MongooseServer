export function logReq (req, res, next){
    console.log(`${req.method} --  ${req.url} -- ${new Date().toLocaleTimeString()}`)

    if (req.body) console.log(req.body);

    next();
};

export function globalErr(err, _req, res, _next) {
  res.status(err.status || 500).json({ error: `❌Error: ${err.message}` });
}