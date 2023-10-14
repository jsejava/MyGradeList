    //  Student class: represents a Student
 class Student {
    constructor(name , ID, EnglishTotal, FrenchTotal, PhsTotal, MathsTotal, WebTechTotal, CompFundTotal, average, grade) {
        this.name = name;
        this.ID = ID;
        this.EnglishTotal = EnglishTotal;
        this.FrenchTotal = FrenchTotal;
        this.PhsTotal = PhsTotal;
        this.MathsTotal = MathsTotal;
        this.WebTechTotal = WebTechTotal;
        this.CompFundTotal = CompFundTotal;
        this.average = average;
        this.grade = grade;
    }
 }
    //  UI class: handle UI tasks
class UI {
    static displayStudents() {
        const students = Store.getStudents();

        students.forEach((student) => UI.addStudentToList(student));
    }
    static addStudentToList(student) {
        const list = document.querySelector('#student-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${student.name}</td>
            
            <td>${student.EnglishTotal}</td>
            <td>${student.FrenchTotal}</td>
            <td>${student.PhsTotal}</td>
            <td>${student.MathsTotal}</td>
            <td>${student.WebTechTotal}</td>
            <td>${student.CompFundTotal}</td>
            <td>${student.average}</td>
            <td>${student.grade}</td>
            <td>${student.ID}</td>
            
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }

    static deleteStudent(el){
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static  showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const navbar = document.querySelector('.navbar');
        const form = document.querySelector('#navbarResponsive');
        navbar.insertBefore(div, form)
        //  Vanish in 3 seconds
        setTimeout(() =>document.querySelector('.alert').remove(),3000);
    }
    static clearFields() {

        document.getElementById('name').value = '';
        document.getElementById('ID').value = '';
        document.getElementById('EnglishBox').value = '';
        document.getElementById('FrenchBox').value = '';
        document.getElementById('PhsBox').value = '';
        document.getElementById('MathsBox').value = '';
        document.getElementById('Web-TechBox').value = '';
        document.getElementById('Comp-FundBox').value = '';
        document.getElementById('AverageBox').value = '';
        document.getElementById('GradeBox').value = '';
        document.getElementById('Subjet1').value = '';
        document.getElementById('Subjet2').value = '';
        document.getElementById('Subjet3').value = '';
        document.getElementById('Subjet4').value = '';
        document.getElementById('Subjet5').value = '';
        document.getElementById('Subjet6').value = '';
        document.getElementById('EnglishQuizzes').value = '';
        document.getElementById('FrenchQuizzes').value = '';
        document.getElementById('PhsQuizzes').value = '';
        document.getElementById('MathsQuizzes').value = '';
        document.getElementById('WebTechQuizzes').value = '';
        document.getElementById('CompFundQuizzes').value = '';
        document.getElementById('EnglishAssignments').value = '';
        document.getElementById('FrenchAssignments').value = '';
        document.getElementById('PhsAssignments').value = '';
        document.getElementById('MathsAssignments').value = '';
        document.getElementById('WebTechAssignments').value = '';
        document.getElementById('CompFundAssignments').value = '';
        document.getElementById('EnglishMidsem').value = '';
        document.getElementById('FrenchMidsem').value = '';
        document.getElementById('MathsMidsem').value = '';
        document.getElementById('PhsMidsem').value = '';
        document.getElementById('WebTechMidsem').value = '';
        document.getElementById('CompFundMidsem').value = '';
        document.getElementById('EnglishSem').value = '';
        document.getElementById('FrenchSem').value =  '';
        document.getElementById('PhsSem').value =  '';
        document.getElementById('MathsSem').value =  '';
        document.getElementById('WebTechSem').value = '';
        document.getElementById('CompFundSem').value = '';
    }
}
    //  Store class: handles storage
class Store {
    static getStudents() {
        let students;
        if(localStorage.getItem('students') === null) {
            students = [];
        }else {
            students = JSON.parse(localStorage.getItem('students'));
        }

        return students;
    }
    static addStudent(student){
        const students = Store.getStudents();

        students.push(student);

        localStorage.setItem('students', JSON.stringify(students));

    }
    static removeStudent(ID) {
        const students = Store.getStudents();

        students.forEach((student, index) => {
            if(student.ID === ID) {
                students.splice(index, 1);
            }
        });

        localStorage.setItem('students', JSON.stringify(students));
    }
}
    //  Event: display Students
document.addEventListener('DOMContentLoaded', UI.displayStudents);
    //  Event: Add a Student
document.querySelector('#student-form').addEventListener('submit', (e)=> {
    //  Prevent actual submit
    e.preventDefault();
    // Get form values
    const name = document.getElementById('name').value;
    const ID = document.getElementById('ID').value;
    const EnglishTotal = document.getElementById('EnglishBox').value;
    const FrenchTotal = document.getElementById('FrenchBox').value;
    const PhsTotal = document.getElementById('PhsBox').value;
    const MathsTotal = document.getElementById('MathsBox').value;
    const WebTechTotal = document.getElementById('Web-TechBox').value;
    const CompFundTotal = document.getElementById('Comp-FundBox').value;
    const average = document.getElementById('AverageBox').value;
    const grade = document.getElementById('GradeBox').value;
    
    //  Validate
    if(!name || !ID || !EnglishTotal || !FrenchTotal || !PhsTotal || !MathsTotal ||
    !WebTechTotal || !CompFundTotal || !average || !grade) {
        UI.showAlert('Please Fill in All Field', 'danger');
    } else{

    //  Instatiate book
    const student = new Student(name , ID, EnglishTotal, FrenchTotal, PhsTotal, MathsTotal, WebTechTotal, CompFundTotal, average, grade);
    
    //  Add Student to UI
    UI.addStudentToList(student);

    // Add Student to store
    Store.addStudent(student);

    // Show success message
    UI.showAlert('Added To The List', 'success');
    //  Clear fields
    UI.clearFields();
    }
});
    //  Event: Remove a Student
document.querySelector('#student-list').addEventListener('click', (e)=> {

    // Remove student form UI
    UI.deleteStudent(e.target);

    // Remove student from store
    Store.removeStudent(e.target.parentElement.previousElementSibling.textContent);
    //  Show success message
    UI.showAlert('Removed form The List', 'success');
});
