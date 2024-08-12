const commandInput = document.getElementById('commandInput');
const output = document.getElementById('output');
const suggestionsBox = document.getElementById('suggestions');
const projectDetails = document.getElementById('projectDetails');
const projectTitle = document.getElementById('projectTitle');
const projectDescription = document.getElementById('projectDescription');

// Merged projects data
const newProjects = {
    'e-commerce-site': {
        title: 'E-Commerce Website',
        description: `Developed a full-stack Ecommerce website using Express.js backend and React frontend with Tailwind CSS.<br>
                     Implemented user authentication and authorization using JSON Web Tokens (JWT).<br>
                     Utilized MongoDB for efficient data storage and retrieval of product and user information.<br>
                     Created responsive UI with Tailwind CSS, ensuring seamless experience across devices.<br>
                     Implemented core e-commerce functionalities including product catalog, search, cart, and checkout.`,
        image: "public/ecom.png" // Replace with actual image path
    },
    '3d-solar-system': {
        title: '3D Solar System',
        description: `Developed a realistic simulation of the solar system using Three.js and React.<br>
                     Implemented accurate planetary orbits and rotations based on astronomical data.<br>
                     Optimized rendering performance for smooth user experience.`,
        image: "public/solar.mp4" // Replace with actual video path
    },
    'time-capsule': {
        title: 'Time Capsule',
        description: `Developed "Time Capsule," a Flask-based web application for college students to store and share memories.<br>
                     Implemented features including photo storage, blog posting, and interest sharing using SQLite database.<br>
                     Utilized Python for backend logic, and HTML/CSS/JavaScript for frontend interface.<br>
                     Focused on user authentication, data security, and efficient database management.`,
        image: "path/to/time-capsule-image.jpg" // Replace with actual image path
    }
};



// Function to show project details
function showProjectDetails(project) {
    const projectDetails = document.getElementById('projectDetails');
    projectDetails.innerHTML = `
        <h2 class="text-green-600">${project.title}</h2>
        <p>${project.description}</p>
        ${project.image.endsWith('.mp4') ? 
            `<video src="${project.image}" class="w-full" controls></video>` : 
            `<img src="${project.image}" class="w-full">`}
        <button onclick="closeDetails()" class="mt-4 text-red-500">Close</button>
    `;
    projectDetails.style.display = 'block'; // Show the details section
}

// Function to close project details
function closeDetails() {
    const projectDetails = document.getElementById('projectDetails');
    projectDetails.style.display = 'none'; // Hide the details section
}

// Function to render projects
function renderProjects() {
    console.log('Rendering projects...'); // Log to check if function is called
    console.log(newProjects); // Log to check the structure of newProjects

    const projectList = document.getElementById('projectList');
    if (!projectList) {
        console.error('Project list element not found!');
        return;
    }

    Object.values(newProjects).forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'bg-gray-800 p-4 rounded';
        projectCard.innerHTML = `
            ${project.image.endsWith('.mp4') ? 
                `<video src="${project.image}" alt="${project.title}" class="w-full h-32 object-cover rounded" autoplay loop muted></video>` : 
                `<img src="${project.image}" alt="${project.title}" class="w-full h-32 object-cover rounded">`}
            <h3 class="text-green-600 mt-2">${project.title}</h3>
            <div class="mt-2">
                <a href="project-details.html?project=${index}" class="text-blue-400 hover:underline">Read More</a>
            </div>
        `;
        projectList.appendChild(projectCard);
    });
}

// Call the function to render projects after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});