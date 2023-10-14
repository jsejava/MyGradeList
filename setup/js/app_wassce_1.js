    //  Student class: represents a Student
    class Student {
        constructor(name , ID, English, French, Phs, Maths, WebTech, CompFund, Science, Core) {
            this.name = name;
            this.ID = ID;
            this.English = English;
            this.French = French;
            this.Phs = Phs;
            this.Maths = Maths;
            this.WebTech = WebTech;
            this.CompFund = CompFund;
            this.Science = Science;
            this.Core = Core;
        }
     }
        //  UI class: handle UI tasks
    class UI {
        static displayWassce() {
            const wassce = Stored.getWassce();
    
            wassce.forEach((student) => UI.addStudentToList(student));
        }
        static addStudentToList(student) {
            const list = document.querySelector('#wassce-list');
    
            const row = document.createElement('tr');
    
            row.innerHTML = `
                <td>${student.name}</td>
                <td>${student.English}</td>
                <td>${student.French}</td>
                <td>${student.Phs}</td>
                <td>${student.Maths}</td>
                <td>${student.WebTech}</td>
                <td>${student.CompFund}</td>
                <td>${student.Science}</td>
                <td>${student.Core}</td>
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
            document.getElementById('Subjet1').value = '';
            document.getElementById('Subjet2').value = '';
            document.getElementById('Subjet3').value = '';
            document.getElementById('Subjet4').value = '';
            document.getElementById('Subjet5').value = '';
            document.getElementById('Subjet6').value = '';
            document.getElementById('Subjet7').value = '';
            document.getElementById('Subjet8').value = '';
            document.getElementById('Score1').value = '';
            document.getElementById('Score2').value = '';
            document.getElementById('Score3').value = '';
            document.getElementById('Score4').value = '';
            document.getElementById('Score5').value = '';
            document.getElementById('Score6').value = '';
            document.getElementById('Score7').value = '';
            document.getElementById('Score8').value = '';
            document.getElementById('BoxA1').value = '';
            document.getElementById('BoxA2').value = '';
            document.getElementById('BoxA3').value = '';
            document.getElementById('BoxA4').value = '';
            document.getElementById('BoxB1').value = '';
            document.getElementById('BoxB2').value = '';
            document.getElementById('BoxB3').value = '';
            document.getElementById('BoxB4').value = '';
            document.getElementById('BoxC1').value = '';
            document.getElementById('BoxC2').value = '';
            document.getElementById('BoxC3').value = '';
            document.getElementById('BoxC4').value = '';
            document.getElementById('BoxD1').value = '';
            document.getElementById('BoxD2').value = '';
            document.getElementById('BoxD3').value = '';
            document.getElementById('BoxD4').value = '';
            document.getElementById('BoxE1').value = '';
            document.getElementById('BoxE2').value = '';
            document.getElementById('BoxE3').value = '';
            document.getElementById('BoxE4').value = ''; 
            document.getElementById('BoxF1').value = '';
            document.getElementById('BoxF2').value = '';
            document.getElementById('BoxF3').value = '';
            document.getElementById('BoxF4').value = '';
            document.getElementById('BoxG1').value = '';
            document.getElementById('BoxG2').value = '';
            document.getElementById('BoxG3').value = '';
            document.getElementById('BoxG4').value = '';
            document.getElementById('BoxH1').value = '';
            document.getElementById('BoxH2').value = '';
            document.getElementById('BoxH3').value = '';
            document.getElementById('BoxH4').value = '';   
        }
    }
        //  Store class: handles storage
    class Stored {
        static getWassce() {
            let wassce;
            if(localStorage.getItem('wassce') === null) {
                wassce = [];
            }else {
                wassce = JSON.parse(localStorage.getItem('wassce'));
            }
    
            return wassce;
        }
        static addStudent(student){
            const wassce = Stored.getWassce();
    
            wassce.push(student);
    
            localStorage.setItem('wassce', JSON.stringify(wassce));
    
        }
        static removeStudent(ID) {
            const wassce = Stored.getWassce();
    
            wassce.forEach((student, index) => {
                if(student.ID === ID) {
                    wassce.splice(index, 1);
                }
            });
    
            localStorage.setItem('wassce', JSON.stringify(wassce));
        }
    }
        //  Event: display wassce
    document.addEventListener('DOMContentLoaded', UI.displayWassce);
        //  Event: Add a Student
    document.querySelector('#student-form').addEventListener('submit', (e)=> {
        //  Prevent actual submit
        e.preventDefault();
        // Get form values
        const name = document.getElementById('name').value;
        const ID = document.getElementById('ID').value;
        const English = document.getElementById('BoxA1').value + "  " + document.getElementById('BoxA3').value;
        const French = document.getElementById('BoxB1').value + "  " + document.getElementById('BoxB3').value;
        const Phs = document.getElementById('BoxC1').value + "  " + document.getElementById('BoxC3').value;
        const Maths = document.getElementById('BoxD1').value + "  " + document.getElementById('BoxD3').value;
        const WebTech = document.getElementById('BoxE1').value + "  " + document.getElementById('BoxE3').value;
        const CompFund = document.getElementById('BoxF1').value + "  " + document.getElementById('BoxF3').value;
        const Science = document.getElementById('BoxG1').value + "  " + document.getElementById('BoxG3').value;
        const Core = document.getElementById('BoxH1').value + "  " + document.getElementById('BoxH3').value;
        
        //  Validate
        if(!name) {
            UI.showAlert('Pls Enter A Name', 'danger');
        } 
        else if(!ID){
            UI.showAlert('Pls Enter an ID', 'danger');
        }
        else{
    
        //  Instatiate book
        const student = new Student(name , ID, English, French, Phs, Maths, WebTech, CompFund, Science, Core);
        
        //  Add Student to UI
        UI.addStudentToList(student);
    
        // Add Student to store
        Stored.addStudent(student);
    
        // Show success message
        UI.showAlert('Added To The List', 'success');
        //  Clear fields
        UI.clearFields();
        }
    });
        //  Event: Remove a Student
    document.querySelector('#wassce-list').addEventListener('click', (e)=> {
    
        // Remove student form UI
        UI.deleteStudent(e.target);
    
        // Remove student from store
        Stored.removeStudent(e.target.parentElement.previousElementSibling.textContent);
        //  Show success message
        UI.showAlert('Removed form The List', 'success');
    });
    