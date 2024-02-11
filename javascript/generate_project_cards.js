const projects = [
    {
        title: "TopDog Android Dog Walking App",
        tags: ["school project", "java", "android"],
        context: "CS5520 Mobile App Development, Summer 2021",
        tools: "Android Development in Java, Android Studio",
        status: "Complete",
        github_link: "https://github.com/alannapasco/TopDog",
        image: "resources/TopDogPreview.png",
        image_alt: "TopDog App Preview",
        description: `<b>Designed</b> and implemented TopDog, an Android app written in Java for dog owners to connect, track/share dog walks, set reminders for dog care, and more. My primarily role on the team of five designers/developers was back-end development.`,
        highlights: `<li>Collaborated on <b>ideation</b> of main features, including the GPS walk tracker, leaderboard, user stats page, and profile page </li>
        <li>Collaborative self-discovery of <b>Google API</b> and <b>GPS services</b> </li>
        <li><b>Designed data representation</b> of User, user data in Java</li>
        <li>Implemented log in/sign up features, menu navigation</li>
        <li><b>Created/stored/managed user data in Firebase Realtime Database</b></li>
        <li>Developed <b>utility class to put/fetch user data off main GUI thread</b> to minimize UI latency</li>
        <li>Maintained <b>explicit control over de/serialization</b> of database objects</li>
        <li>Resolved major race condition using Java’s Future and ExecutorService to track progress of asynchronous tasks</li>`,
    },
    {
        title: "Fish Game Server",
        tags: ["school project", "java"],
        context: "CS 4500 Software Development - Fall 2020",
        tools: "Roughly 8,000 lines of Java & 7 pages of interface design",
        status: "Complete",
        github_link: "https://github.com/alannapasco/moulton/tree/master/Fish",
        image: "resources/sundown_diagram.png",
        image_alt: "UML Diagram of project information architecture",
        description: `Design and implement a gaming system that hosts games of
        <i>Hey, That’s my Fish!</i> and provides a server to which hackers can connect AI
        players to compete in tournaments. Project implemented from the bottom up starting
        with game pieces, full game and tournament play, and finally the client/server components.
        Project completed while auditing Northeastern’s key undergraduate software development course.
        Please note that due to the audit, the course does not appear on my transcript. `,
        highlights: `<li>Semester-long <b>pair programming</b> collaboration</li>
        <li>Wrote detailed <b>design documents</b>, defended design choices</li>
        <li>Presented <b>two code walks</b> for class of 50 students as well as a 1-hour final code walk with course staff  </li>
        <li><b>Integration tests</b> for each milestone; unit tests for each file</li>
        <li>A <b>complex tree data structure to lazily generate</b> future game outcomes for strategizing and determining game rules mid-game</li>
        <li>Implemented a potential hacker’s AI player-software using the <b>minimax algorithm strategy</b></li>
        <li>Designed and wrote <b>player API</b> protocol documentation</li>
        <li>Made design decisions mindful of potential security threats to internal system</li>
        <li>Implemented <b>remote-proxy pattern</b>, bringing together the server-side game system and client-side AI players</li>`,
    },
    {
        title: "Language-Prediction Tool",
        tags: ["school project", "python", "data science"],
        context: "DS 2000 Fundamentals of Data Science - Spring 2018",
        tools: "Python and Statistics",
        status: "Complete",
        github_link: "",
        image: "resources/lp.png",
        image_alt: "Code Demo",
        description: `Built a language-prediction tool to predict which langauge a given document is written in.
        The tool is effective on documents written in one of seven languages included in the sample set.
        To clarify, we were given a set of 37 documents written in one of the seven languages.
        The document filenames all included which language they were written, except for 3 docs which had the word 'unknown' included in the filenames. We were then
        set to implement our tool given these resources.`,
        highlights: `<li>Create two dictionaries: one for files we <i>do</i> know the language of, and one for unknown files</li>
        <li><b>Read in</b> the input files</li>
        <li><b>Delegate and Store</b> each input file as such:
          <ul><li>key = [file name] or [unknown#] where the # corresponds to the order with which the tool encountered the unknown files</li>
              <li>value = one long string that is the contents of the file</li></ul>
        <li><b>Clean all data</b> (removing punctuation and spaces)</li>
        <li>Collect and analyze the <b>frequency of trigrams</b> (3-character subsequences) in the files</li>
        <li><b>Normalize the trigram frequencies</b></li>
        <li><b>Calculate the cosine similarity</b> between trigram collections of unknown files and known files</li>
        <li>Match the unknown documents with the languages they have the greatest cosine similarity index with</li>
        <li>Organize output and <b>store</b> in output file indicated in sys args</li>`,
    },
    {
        title: "Light 'Em All",
        tags: ["school project", "java"],
        context: "CS 2510 Fundamentals of CS II - Spring 2018",
        tools: "Java and Graph Theory",
        status: "Complete",
        github_link: "",
        image: "resources/lea.gif",
        image_alt: "Gif of game play",
        description: `Implement <i>Light ‘Em All</i>, a game where the player connects wires by rotating tiles and moves the power station across the wires until the entire grid is connected and lit. The catch: The power station is weak and only exerts power up to a particular radius from the station, so once all the wires are connected the user must use the arrow keys to find a point on the grid where all its edges are reachable by light.`,
        highlights: `<li>Identified the <b>minimum spanning tree</b> of the game's underlying graph using <b>Kruskal’s algorithm</b> to generate the continuous wire grid before randomly rotating tiles for gameplay</li>
        <li>Calculated <b>radius of power</b> by finding the furthest distance between any two nodes and cutting that in half</li>
        <li>Used <b>breadth first search</b> to traverse tiles stemming from power station and light only the tiles within the radius of power; Implemented gradient color to make closer nodes brighter than further nodes</li>
        <li>Implemented the option to generate a <b>biased graph</b> toward more horizontal or vertical wires by increasing the weight of horizontal or vertical edges respectively</li>
        <li>Implemented <b>hexagonal version</b> of the game where tiles are 6-sided </li>`,
    }
];

//Create uniform project cards. To insert a new project to the site, add it to the list of projects above.
const portfolioContainer = document.createElement('main');
let imagePlacement = "img-right"; //aligns images in alternating right-left sides of the page 
    
projects.forEach((project) => {
    const projectCard = createProjectCard(project, imagePlacement);
    portfolioContainer.appendChild(projectCard);
    if (imagePlacement == "img-left") {
        imagePlacement = "img-right";
    } else {
        imagePlacement = "img-left";
    }
});

document.body.appendChild(portfolioContainer);


function createProjectCard(project, imagePlacement) {
    const projectCard = document.createElement("section");
    projectCard.classList.add("project-card");

    /*title*/
    const titleElement = document.createElement("h2");
    titleElement.textContent = project.title;
    projectCard.appendChild(titleElement);

    /*image + alt*/
    const imageElement = document.createElement("img");
    imageElement.classList.add(imagePlacement); 
    imageElement.src = project.image;
    imageElement.alt = project.image_alt;
    projectCard.appendChild(imageElement);

    /*list: [context, tools, status, github ]*/
    const contextList = document.createElement('ul');
    contextList.classList.add("context-list");
    contextList.innerHTML = `
        <li class=context>${project.context}</li>
        <li class=tools>${project.tools}</li>
        <li class=status>${project.status}</li>
        <li class=github><a href=${project.github_link}>GitHub</a></li>
    `
    projectCard.appendChild(contextList);

    /*description & highlights*/
    const descriptionElement = document.createElement("p");
    descriptionElement.innerHTML = project.description;
    projectCard.appendChild(descriptionElement);
    
    const highlightsElement = document.createElement("ul");
    highlightsElement.innerHTML = project.highlights;
    projectCard.appendChild(highlightsElement);

    return projectCard;
}