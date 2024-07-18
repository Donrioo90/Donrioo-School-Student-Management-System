function displayStudent(student) {
    const studentContainer = document.getElementById('student-container');
    studentContainer.innerHTML = ''; // Clear previous result
  
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
  
  document.getElementById('search-button').addEventListener('click', () => {
    const name = document.getElementById('search-name').value;
    const studentClass = document.getElementById('search-class').value;
    searchStudent(name, studentClass);
  });
  