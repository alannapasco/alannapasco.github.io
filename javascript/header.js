// Generates header to be used on every page site-wide
const header = document.createElement('header');
header.innerHTML = 
`
    <style>
    header {
        padding-bottom:40px;
        font: 14px/1.5 "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-family: 'Roboto', sans-serif;
        font-weight:400;
    }
        
    nav {
        display: inline-block;
    }
        
    header #home_tab{
        font-size: 30px;
        text-align: left;
        position: relative;
        color:#363636;
        padding: 4px;
        border: 1px solid #FFFFFF;
        border-radius: 16px;
    }
        
    header #home_tab:hover{
        color:rgb(46, 84, 103);
        border: 1px solid #069;
        border-radius: 16px;
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
        <span class="tab"><a href="thoughts.html">About</a></span>
        <span style="color:#363636">|</span>
        <span class="tab"><a href="work.html">Work</a></span>
    </nav>
`;
document.body.prepend(header);