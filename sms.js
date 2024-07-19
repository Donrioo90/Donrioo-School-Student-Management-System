//displays the student's details in the designated container. If the student is not found, it shows a "Student not found" message.
function displayStudent(student) {
    const studentContainer = document.getElementById('student-container');
    studentContainer.innerHTML = ''; 

    if (student) {
        const studentCard = document.createElement('div');
        studentCard.className = 'student-card';

        studentCard.innerHTML = `
            <img src="${student.image}" alt="${student.name}">
            <div>
                <h2>${student.name}</h2>
                <p>Class: ${student.class}</p>
                <p>Grade: ${student.grade}</p>
                <p>Class Attendance: ${student.class_attendance}</p>
                <p>Fees Paid: ${student.fees_paid}</p>
                <p>Health Information: ${student.health_information}</p>
            </div>
        `;

        studentContainer.appendChild(studentCard);
    } else {
        document.getElementById('message').style.display = 'block';
    }
}
//This function fetches student data from a JSON file (sms.json), searches for a student by name and class, and calls displayStudent(student) to display the result.
function searchStudent(name, studentClass) {
    fetch('sms.json')
        .then(response => response.json())
        .then(data => {
            const student = data.students.find(student => 
                student.name.toLowerCase() === name.toLowerCase() &&
                student.class.toLowerCase() === studentClass.toLowerCase()
            );
            document.getElementById('message').style.display = 'none';
            displayStudent(student);
        })
        .catch(error => console.error('Error fetching student data:', error));
}
//Adds a click event listener to the search button to trigger the searchStudent 
document.getElementById('search-button').addEventListener('click', () => {
    const name = document.getElementById('search-name').value;
    const studentClass = document.getElementById('search-class').value;
    searchStudent(name, studentClass);
});
//This function makes sections visible when they come into the viewport
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Adding the dark mode toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Show report link on click
    const reportLink = document.getElementById('report-link');
    reportLink.addEventListener('click', function() {
        const reportContainer = document.getElementById('report-container');
        reportContainer.style.display = 'block';
        reportContainer.scrollIntoView({ behavior: 'smooth' });
    });
});
