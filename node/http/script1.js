const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/html'})
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">
  <title>Live Sports Scoreboard</title>
  <link rel="stylesheet" href="./assets/css/style.css">
</head>
<body>
  <header>
    <div class="logo">LIVE SPORTS SCOREBOARD</div>
    <nav>
      <ul>
        <li><a href="./register.html" onclick="loadSignIn()">Sign In</a></li>
        <li><a href="#" onclick="loadLogin()">Login</a></li>
      </ul>
    </nav>
  </header>
   <div class="container">
    <div class="content">
        <h1>Live Sports Scoreboard</h1>
        <p>Get the latest updates and scores from your favorite sports in real-time. Stay informed and never miss a moment of the action.</p>
    </div>
  </div>
 
  <script src="./assets/js/script.js"></script>
</body>
</html>`)
    res.end()
})
server.listen(4162,()=>{
    console.log("setrver is running @ http://localhost:4162")
})