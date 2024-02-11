
// Generates contact info neatly formatted to be reused site-wide
const connect = document.createElement('section');
connect.innerHTML = 
`
    <style>
    #connect_bot {
        display: inline;
    }
    </style>

    <b style="color:#363636;">Connect</b><br>
    <a target="_blank" href="https://www.linkedin.com/in/alanna-pasco-8918028b/">Linkedin</a> |
    <a target="_blank" href="https://github.com/alannapasco">GitHub</a> |
    <a target="_blank" href="resources/AlannaPasco.pdf">Resume</a><br>
    pasco.a@northeastern.edu<br><br>
`;
connect.classList.add("body_text");
document.body.appendChild(connect);