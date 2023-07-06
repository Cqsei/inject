var styles = `
*, *:before, *:after, ul, li, a, button, input, h1, h2, h3, h4, h5, h6, p, img, image, svg, path, g {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: transparent;
    border: none;
    text-decoration: none;
    font-family: "Roboto";
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    list-style: none;
  }
  
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #111;
    font-family: "Roboto";
  }
  
  li {
    opacity: 0;
    -webkit-animation: fadeIn 0.4s ease-in-out forwards;
            animation: fadeIn 0.4s ease-in-out forwards;
  }
  
  @-webkit-keyframes fadeIn {
    100% {
      opacity: 1;
    }
  }
  
  @keyframes fadeIn {
    100% {
      opacity: 1;
    }
  }
  .wrapper {
    width: 100%;
    max-width: 650px;
    margin: 0 auto;
    padding-bottom: 70px;
    overflow-x: hidden;
    word-break: break-all;
  }
  
  li {
    padding: 10px 20px;
    color: #fff;
    word-break: break-all;
  }
  li span {
    color: #0bacff;
    font-weight: 700;
  }
  
  input.message {
    color: #fff;
    width: 100%;
    max-width: 650px;
    position: fixed;
    bottom: 0;
    height: 60px;
    background-color: #000;
    box-shadow: 0 -1px 3px rgba(255, 255, 255, 0.06), 0 1px 2px rgb(255 0 0 / 12%);
    padding: 0 20px;
    left: 50%;
    transform: translateX(-50%);
  }
  input.message:focus {
    outline: none;
  }
  
  .initModal {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .initModal h3 {
    font-weight: 300;
    color: #888;
  }
  .initModal input.username {
    width: 350px;
    height: 60px;
    background-color: #111;
    padding: 0 15px;
    margin-top: 25px;
    color: #BBB;
  }
  .initModal input.username:focus {
    outline: none;
  }
  
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
