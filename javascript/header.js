
// Contains header to be used on every page site-wide
function createHeader() {
    const header = document.createElement('header');
    header.innerHTML = 
    `
        <style>
        header {
            padding-bottom:40px;
        }
          
        nav {
            display: inline-block;
        }
          
        header #home_tab{
            font-size: 30px;
            text-align: left;
            position: relative;
            color:#363636;
        }
          
        header #home_tab:hover{
            color:rgb(46, 84, 103);
        }
          
        header #right_tabs{ 
            font-size: 25px;
            float: right;
            position: relative;
            padding-top: 0.5%;
        }
        </style>

        <a href="index.html"><nav id="home_tab">Alanna Pasco</nav></a>
        <nav id="right_tabs">
            <span class="tab"><a href="about.html" >About</a></span>
            <span style="color:#363636">|</span>
            <span class="tab"><a href="code.html" >Work</a></span>
        </nav>
    `;
    return header;
}