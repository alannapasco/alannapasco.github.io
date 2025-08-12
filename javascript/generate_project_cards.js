/*
    {
        title: "",
        tags: one or many of["code-project", "code-professional", "speaking", "leadership"],
        context: "A short description of the where and whem this project/experience took place",
        tools: "",
        status: one of: ["Complete", "In-Progress"],
        github_link: "",
        image: "resources/…png",
        image_alt: "…",
        description:``,
        highlights: ``
    },
*/

const projects = [
    {
        title: "Amazon Web Services Internship - Elastic File System",
        tags: ["code-professional-exp"],
        context: "AWS 3-month Internship - Fall 2022",
        tools: "Python, Typescript, AWS Cloud Development Kit, AWS AppConfig, IaC/IaaS",
        status: "Complete",
        github_link: "not available",
        image: "resources/workimg_awsefs.png",
        image_alt: "The Amazon Web Services logo",
        description: `During this internship I spearheaded the integration of AWS AppConfig into existing an EFS component, enabling the dynamic configuration of canary test workflows. The project outcomes reduced operator burden by enabling the toggling of problematic workflows during maintenance, and enabled the team to practice resource frugality by introducing selective/environment-dependent workflow enabling. Eight months after my internship I had the gratitude of returning to EFS full time and observing that my implemented solution had continued to enhance operational efficency.`,
        highlights_description: "<br><br>Project Highlights:",
        highlights: `
            <li>Reduced customer-impacting failures by designing, implementing dynamic configuration mechanism for canary tests</li>
            <li>Limited the creation of unused resources by developing unique configurations for canary deployment to select regions</li>
            <li>Mitigated canary false alarms via more robust test sets, instant config update, deployment, and validation</li>`,
    },
    {
        title: "Chewy Co-op - Practice Hub Prescription Management",
        tags: ["code-professional-exp"],
        context: "Chewy 6-month Internship - Spring 2022",
        tools: "Python, Django, GraphQL / Kotlin, RxJava, Android",
        status: "Complete",
        github_link: "not available",
        image: "resources/workimg_chewy.jpeg",
        image_alt: "The Chewy company logo over a green background with white dogs",
        description: `In Spring 2022 I completed a 6-month co-op with Chewy working on Practice Hub (PH), a digital prescription management tool used by over 600 veterinarian clinics. From January to March, I worked on the backend team where I gained agility in the Python/Django/GraphQL stack and learned the intricacies of database management. Then, from March to June I joined the Android mobile team in designing and implementing a mobile-centered PH. Over time, my detailed understanding of the backend combined with my newly acquired perspective at the frontend allowed me to narrow in on potentially untested user patterns that ended up uncovering major opportunities to improve the user experience. I didn't want this high-level knowledge to go to waste, so throughout my learnings I developed detailed internal technical and product navigation documentation, which went on to onboard 6 new full-time team members during just my time there.`,
        highlights_description: "",
        highlights: ``,
    },
    {
        title: "Khoury College Graduation Student Speaker",
        tags: ["speaking", "leadership"],
        context: "Selected to be Graduation Student Speaker - May 2023",
        tools: "Voice",
        github_link: "not available",
        image: "resources/workimg_gradspeech.png",
        image_alt: "A photo taken at the 2023 Khoury College Graduation Ceremony that shows the stage and me speaking at the podium",
        description:`In May 2023 I was selected as student speaker at Northeastern's Khoury College of Computer Sciences graduation ceremony. <a target="_blank" href="https://youtu.be/8-pUWGD0R64?si=-BDiXlV574hRo2_2&t=2489">Watch my corny speech here</a>. <br><br><br><br><br>`,
        highlights_description:'',
        highlights: '',
    },
    {
        title: "Programming Languages & Systematic Engineering",
        tags: ["code-project"],
        context: "Independent Study under Professor M. Felleisen - Spring 2023",
        tools: "Java",
        status: "Complete",
        github_link: "https://github.com/alannapasco/PL/tree/main/pl_in_java/src/main/java/pl",
        image: "resources/workimg_pl.png",
        image_alt: "A screenshot of GitHub showcasing an example class of the programming language developed during this course",
        description:`This independent study explored the mechanics behind programming languages (PL) through the implementation of my very own. This study took a unique focus on how <b>PL concepts relate to the systematic engineering of software at all scales</b>, as well as PL design that optimizes the developer experience and minimizes errors. The study involved reading some contemporary texts on language-oriented programming; examining the implementation details of popular languages; learning compilation mechanisms; and weighing pros/cons of various methodologies. The resulting takeaways were a robust foundation for efficient and effective programming.`,
        highlights_description: `<br><br>Course Concepts:`,
        highlights: `<li>types and type checking</li>
        <li>variable declarations and scope</li>
        <li>function declaration</li>
        <li>developer-facing: why is "static scope" better than "dynamic scope"</li>
        <li>assignment statements, call-by-value</li>
        <li>higher-order and recursive functions</li>
        <li>conditionals and loops, recursive functions vs loops (measured)</li>
        <li>parametric polymorphism: forall types</li>
        `
    },
    {
        title: "TopDog Android Dog Walking App",
        tags: ["code-project"],
        context: "CS5520 Mobile App Development, Summer 2021",
        tools: "Android Development in Java, Android Studio, Firebase Realtime Database",
        status: "Complete",
        github_link: "https://github.com/alannapasco/TopDog",
        image: "resources/workimg_TopDogPreview.png",
        image_alt: "TopDog App Preview",
        description: `Designed and implemented TopDog, an Android app for dog owners to connect, track/share dog walks, set reminders for dog care, and more. This project was completed by a group of five where my role was primarily backend development`,
        highlights_description: `<br><br>Project Highlights:`,
        highlights: `<li>Collaborated on <b>ideation</b> of main features, including the GPS walk tracker, leaderboard, user stats page, and profile page </li>
        <li>Collaborative learning of <b>Google API</b> and <b>GPS services</b> </li>
        <li>Took ownership of designing project information architecture</li>
        <li>Implemented log in/sign up features, menu navigation</li>
        <li>Created/stored/managed user data in <b>Firebase Realtime Database</b></li>
        <li>Developed <b>utility class to put/fetch user data off main GUI thread</b> to minimize UI latency</li>
        <li>Resolved race condition using Java's Future and ExecutorService to track progress of asynchronous tasks</li>`,
    },
    {
        title: "3x First Gen Panel Speaker",
        tags: ["speaking", "leadership"],
        context: "Invited to speak on first gen week panels three years in a row",
        tools: "Voice",
        github_link: "not available",
        image: "resources/workimg_firstgenpanel.jpeg",
        image_alt: "A screenshot of a digital flyer advertising the first gen panel I spoke on with all speakers photos and names",
        description:`
        <i>'First-generation college student' is often defined as a student whose parents/guardians have not earned a four-year degree in the U.S.</i>
        <br><br>
        I still remember the first time Northeastern recognized first gen students back in 2019 in our first ever <a target="_blank" href="https://cie.northeastern.edu/programs/1st-gen-week/">First Gen Week celebration</a>. Nothing prepared me for the emotional roller coaster of the first gen open mic - a session in which anyone around the room could grab the mic and give their first gen testimony. Up until that point, it felt like I was the single only person on campus having the first gen experience. Today, as a proud first generation college alumn and the first person in my family to attain a masters degree, I understand how important it is for first gen students to have knowledge, wisdom, support, and hindsight passed to them from those of us who are further along in our journey - it's the precise thing that we lack as first gen students. With that, it is an absolute honor to continue connecting with and supporting my fellow first gen students at Northeastern by being invited back to speak every year as a panelist during First Gen Week. ☝🏻 `,
        highlights_description:'',
        highlights: '',
    },
    {
        title: "Fish Game Server",
        tags: ["code-project"],
        context: "CS 4500 Software Development - Fall 2020",
        tools: "Roughly 8,000 lines of Java & 7 pages of interface design",
        status: "Complete",
        github_link: "https://github.com/alannapasco/moulton/tree/master/Fish",
        image: "resources/workimg_sundown_diagram.png",
        image_alt: "UML Diagram of project information architecture",
        description: `Designed and implemented a gaming system that hosts games of
        <i>Hey, That's my Fish!</i> and provides a server to which hackers can connect AI
        players to compete in tournaments. Project implemented from the bottom up starting
        with game pieces, full game and tournament play, and finally the client/server components.`,
        highlights_description: "<br><br>Project Highlights:",
        highlights: `<li>Semester-long <b>pair programming</b> collaboration</li>
        <li>Wrote detailed <b>design documents</b>, defended design choices</li>
        <li>Presented <b>two code walks</b> for class of 50 students as well as a 1-hour final code walk with course staff  </li>
        <li><b>Integration tests</b> for each milestone; unit tests for each file</li>
        <li>A <b>complex tree data structure to lazily generate</b> future game outcomes for strategizing and determining game rules mid-game</li>
        <li>Implemented a potential hacker's AI player-software using the <b>minimax algorithm strategy</b></li>
        <li>Designed and wrote <b>player API</b> protocol documentation</li>
        <li>Made design decisions mindful of potential security threats to internal system</li>
        <li>Implemented <b>remote-proxy pattern</b>, bringing together the server-side game system and client-side AI players</li>`,
    },
    {
        title: "Personal Portfolio Workshop - Hosted by Khoury Masters Student Council",
        tags: ["speaking", "leadership"],
        context: "KMSC - 2020 and 2021",
        tools: "HTML/css/Javacsript, GitHub Pages",
        github_link: "not available",
        image: "resources/workimg_kmscworkshop.png",
        image_alt: "A screenshot of an invitation to the workshop",
        description:`From Jan 2021 - May 2022 I served as Treasurer of the Khoury Masters Student Council (KMSC), a student-led organization that planned, funded, and hosted enriching monthly activities for <a target="_blank" href="https://www.khoury.northeastern.edu">Khoury</a> masters students to network and learn from one another. After making this simple portfolio and realizing how fun and easy it is to host on <a target="_blank" href="https://pages.github.com">GitHub Pages</a>, I conducted two personal portfolio workshops with ~20 students in attendance each where we explored different ways to represent students' programming experience in portfolio format and got students up and running with Github Pages.`,
        highlights_description: "",
        highlights: "",
    },
    {
        title: "Personal Portfolio - this website",
        tags: ["code-project"],
        context: "Personal Project - Fall 2021",
        tools: "Web Development Concepts, html/css/javascript",
        status: "In-Progress",
        github_link: "https://github.com/alannapasco/alannapasco.github.io",
        image: "resources/workimg_website_figma.png",
        image_alt: "A screenshot of figma.com showcasing the design of this personal website/portfolio",
        description: `In Fall 2021 I was applying to dozens of coops when I noticed most applications had an optional field for a personal website/portfolio. I decided I wanted to have something for those boxes and with virtually no web development experience what-so-ever threw together this mostly static website in 24 hours.`,
        highlights_description: `<br><br>Things I am slowly but surely using this website to learn:`,
        highlights: ` 
            <li>figma</li>
            <li>HTML/css/Javascript foundations</li>
            <li>Semantic HTML and Web Accessibility</li>
            <li>How to make non-static webpages with javascript</li>
            <li>Responsive webpages, mobile view development</li>
            <li>Eventually: Typescript & React</li>
            `
    },
    {
        title: "Language Prediction Tool",
        tags: ["code-project"],
        context: "DS 2000 Fundamentals of Data Science - Spring 2018",
        tools: "Python and Statistics",
        status: "Complete",
        github_link: "https://github.com/alannapasco/DataScience_LanguagePredictorTool",
        image: "resources/workimg_lp.png",
        image_alt: "Code Demo",
        description: `Built a tool that predicts which langauge a given document is written in. The tool is effective on documents written in one of seven languages included in the sample set of 37 total documents. The implemented solution accurately predicted all three files written in an 'unknown' language.`,
        highlights_description: "<br><br>Steps taken:",
        highlights: `<li>Create two dictionaries: one for files we <i>do</i> know the language of, and one for unknown files</li>
        <li><b>Read in</b> the input files</li>
        <li><b>Delegate and Store</b> each input file as such:
        <ul>
            <li>key = [file name] or [unknown#] where the # corresponds to the order with which the tool encountered the unknown files</li>
            <li>value = one long string that is the contents of the file</li>
        </ul>
        <li><b>Clean all data</b> (removing punctuation and spaces)</li>
        <li>Collect and analyze the <b>frequency of trigrams</b> (3-character subsequences) in the files</li>
        <li><b>Normalize the trigram frequencies</b></li>
        <li><b>Calculate the cosine similarity</b> between trigram collections of unknown files and known files</li>
        <li>Match the unknown documents with the languages they have the greatest cosine similarity index with</li>
        <li>Organize output and <b>store</b> in output file indicated in sys args</li>`,
    },
    {
        title: "Light 'Em All",
        tags: ["code-project"],
        context: "CS 2510 Fundamentals of CS II - Spring 2018",
        tools: "Java and Graph Theory",
        status: "Complete",
        github_link: "https://github.com/alannapasco/FundiesII_LightEmAll",
        image: "resources/workimg_lea.gif",
        image_alt: "Gif of game play",
        description: `Implement <i>Light ‘Em All</i>, a game where the player connects wires by rotating tiles and moves a power station across the wires until the entire grid is connected and lit. The catch: The power station is weak and only exerts power up to a particular radius from the station, so once all wires are connected the user must use the arrow keys to find a point on the grid where all its edges are reachable by light.`,
        highlights_description: "<br><br>Project learnings:",
        highlights: `<li>Identified the <b>minimum spanning tree</b> of the game's underlying graph using <b>Kruskal's algorithm</b> to generate the continuous wire grid before randomly rotating tiles for gameplay</li>
        <li>Calculated <b>radius of power</b> by finding the furthest distance between any two nodes and cutting that in half</li>
        <li>Used <b>breadth first search</b> to traverse tiles stemming from power station and light only the tiles within the radius of power; Implemented gradient color to make closer nodes brighter than further nodes</li>
        <li>Implemented the option to generate a <b>biased graph</b> toward more horizontal or vertical wires by increasing the weight of horizontal or vertical edges respectively</li>
        <li>Implemented <b>hexagonal version</b> of the game where tiles are 6-sided </li>`,
    }
];

//Create uniform project cards. 
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
    projectCard.setAttribute('data-tags', JSON.stringify(project.tags));
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
    const github_link = project.github_link != "not available" ? 
        `<a target="_blank" href=${project.github_link}>GitHub</a>` : 
        `<i>Code not available</i>`;
    contextList.innerHTML = `
        <li class=context>${project.context}</li>
        <li class=tools>${project.tools}</li>
        <li class=github>${github_link}</li>
    `
    projectCard.appendChild(contextList);

    /*description & highlights*/
    const descriptionElement = document.createElement("p");
    descriptionElement.innerHTML = project.description;
    if (project.highlights_description != "") {
        descriptionElement.innerHTML += project.highlights_description;
    }
    projectCard.appendChild(descriptionElement);
    const highlightsElement = document.createElement("ul");
    highlightsElement.innerHTML = project.highlights;
    projectCard.appendChild(highlightsElement);

    return projectCard;
}


//Filter cards based on tags
function filterProjects(clickedTag) {
    const projectCards = document.querySelectorAll('.project-card');
    const filterButtons = document.querySelectorAll('.filter-button');

    // Remove 'selected' class from all filter buttons
    filterButtons.forEach(button => {
        button.classList.remove('selected');
    });

    // Add 'selected' class to the clicked filter button
    const clickedButton = document.querySelector(`#${clickedTag}`);
    clickedButton.classList.add('selected');

    // Finally, apply the filter 
    projectCards.forEach(card => {
        const projectTags = JSON.parse(card.getAttribute('data-tags'));
        
        // If the project has the selected tag, show it; otherwise, hide it
        if (projectTags.includes(clickedTag) || clickedTag === 'all') {
            card.style.display = 'inline-block';
        } else {
            card.style.display = 'none';
        }
    });
}
