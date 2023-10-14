    //  total function
    function total(){
    const name = document.getElementById('name').value;
    const ID = document.getElementById('ID').value;
    const EnglishQuizzes = parseInt(document.getElementById('EnglishQuizzes').value);
    const FrenchQuizzes = parseInt(document.getElementById('FrenchQuizzes').value);
    const PhsQuizzes = parseInt(document.getElementById('PhsQuizzes').value);
    const MathsQuizzes = parseInt(document.getElementById('MathsQuizzes').value);
    const WebTechQuizzes = parseInt(document.getElementById('WebTechQuizzes').value);
    const CompFundQuizzes = parseInt(document.getElementById('CompFundQuizzes').value);
    const EnglishAssignments = parseInt(document.getElementById('EnglishAssignments').value);
    const FrenchAssignments = parseInt(document.getElementById('FrenchAssignments').value);
    const PhsAssignments = parseInt(document.getElementById('PhsAssignments').value);
    const MathsAssignments = parseInt(document.getElementById('MathsAssignments').value);
    const WebTechAssignments = parseInt(document.getElementById('WebTechAssignments').value);
    const CompFundAssignments = parseInt(document.getElementById('CompFundAssignments').value);
    const EnglishMidsem = parseInt(document.getElementById('EnglishMidsem').value);
    const FrenchMidsem = parseInt(document.getElementById('FrenchMidsem').value);
    const PhsMidsem = parseInt(document.getElementById('PhsMidsem').value);
    const MathsMidsem = parseInt(document.getElementById('MathsMidsem').value);
    const WebTechMidsem = parseInt(document.getElementById('WebTechMidsem').value);
    const CompFundMidsem = parseInt(document.getElementById('CompFundMidsem').value);
    const EnglishSem = parseInt(document.getElementById('EnglishSem').value);
    const FrenchSem = parseInt(document.getElementById('FrenchSem').value);
    const PhsSem = parseInt(document.getElementById('PhsSem').value);
    const MathsSem = parseInt(document.getElementById('MathsSem').value);
    const WebTechSem = parseInt(document.getElementById('WebTechSem').value);
    const CompFundSem = parseInt(document.getElementById('CompFundSem').value);
    const Subjet1 = document.querySelector("#Subjet1").value;
    const Subjet2 = document.querySelector('#Subjet2').value;
    const Subjet3 = document.querySelector('#Subjet3').value;
    const Subjet4 = document.querySelector('#Subjet4').value;
    const Subjet5 = document.querySelector('#Subjet5').value;
    const Subjet6 = document.querySelector('#Subjet6').value;
    

    //box condition
    
    if(!name){
        
        UI.showAlert('Pls Enter A Name', 'info');
    }
    else if(!ID){
        UI.showAlert('Pls Enter an ID', 'info');
        
    }
    else if(!EnglishQuizzes || !EnglishAssignments || !EnglishMidsem || !EnglishSem){
        UI.showAlert('Please Provide All English Grade', 'danger');
    }
    else if(!FrenchQuizzes || !FrenchAssignments || !FrenchMidsem || !FrenchSem){
        UI.showAlert('Please Provide All French Grade', 'danger');
    }
    else if(!PhsQuizzes || !PhsAssignments || !PhsMidsem || !PhsSem){
        UI.showAlert('Please Provide All Phs Grade', 'danger');
    }
    else if(!MathsQuizzes || !MathsAssignments || !MathsMidsem || !MathsSem){
        UI.showAlert('Please Provide All Maths Grade', 'danger');
    }
    else if(!WebTechQuizzes || !WebTechAssignments || !WebTechMidsem || !WebTechSem){
        UI.showAlert('Please Provide All Web-Tech Grade', 'danger');
    }
    else if(!CompFundQuizzes || !CompFundAssignments || !CompFundMidsem || !CompFundSem){
        
        UI.showAlert('Please Provide All Comp-Fund Grade', 'danger');
    }
    else if(EnglishQuizzes>10 || EnglishAssignments>10 || EnglishMidsem>20 || EnglishSem>60 ||FrenchQuizzes>10 || 
        FrenchAssignments>10 || FrenchMidsem>20 || FrenchSem>60 ||PhsQuizzes>10 || PhsAssignments>10 ||
        PhsMidsem>20 || PhsSem>60 ||MathsQuizzes>10 || MathsAssignments>10 || MathsMidsem>20 || 
        MathsSem>60 || WebTechQuizzes>10 || WebTechAssignments>10 || WebTechMidsem>20 || WebTechSem>60||
        CompFundQuizzes>10|| CompFundAssignments>10 || CompFundMidsem>20 || CompFundSem>60){
        UI.showAlert('Please Check For The Equal Weight','info');
    }
    
    else{
    const EnglishTotal = parseInt(EnglishQuizzes + EnglishAssignments + EnglishMidsem + EnglishSem);
    const FrenchTotal = FrenchQuizzes + FrenchAssignments + FrenchMidsem + FrenchSem;
    const PhsTotal = PhsQuizzes + PhsAssignments + PhsMidsem + PhsSem;
    const MathsTotal = MathsQuizzes + MathsAssignments + MathsMidsem + MathsSem;
    const WebTechTotal = WebTechQuizzes + WebTechAssignments + WebTechMidsem + WebTechSem;
    const CompFundTotal = CompFundQuizzes + CompFundAssignments +CompFundMidsem + CompFundSem;
    const gradA = "A";
    const gradBplus = "B+";
    const gradB = "B";
    const gradCplus = "C+";
    const gradC = "C";
    const gradDplus = "D+";
    const gradD = "D";
    const gradE = "E";
    const average = (EnglishTotal + FrenchTotal + PhsTotal + MathsTotal + WebTechTotal + CompFundTotal)/6;
    document.getElementById('EnglishBox').value = Subjet1 + " = " + EnglishTotal + "%";
    document.getElementById('FrenchBox').value = Subjet2 + " = " + FrenchTotal + "%";
    document.getElementById('PhsBox').value = Subjet3 + " = " + PhsTotal + "%";
    document.getElementById('MathsBox').value = Subjet4 + " = " + MathsTotal + "%";
    document.getElementById('Web-TechBox').value = Subjet5 + " = " + WebTechTotal + "%";
    document.getElementById('Comp-FundBox').value = Subjet6 + " = " + CompFundTotal + "%";
    document.getElementById('AverageBox').value = average + "%";

    // Grade condition

        if(average>=80 && average<=100){
            
            document.getElementById('GradeBox').value = gradA;
        }
        else if(average>=75 && average<=79){
            
            document.getElementById('GradeBox').value = gradBplus;
        }
        else if(average>=70 && average<=74){
            
            document.getElementById('GradeBox').value = gradB;
        }
        else if(average>=65 && average<=69){
            
            document.getElementById('GradeBox').value = gradCplus;
        }
        else if(average>=60 && average<=64){
            
            document.getElementById('GradeBox').value = gradC;
        }
        else if(average>=55 && average<=59){
            
            document.getElementById('GradeBox').value = gradDplus;
        }
        else if(average>=50 && average<=54){
            
            document.getElementById('GradeBox').value = gradD;
        }
        else if(average<50){
            
            document.getElementById('GradeBox').value = gradE;
        }           
    }
}

function InfoQuizzes(){
UI.showAlert('Unannounced quizzes (equal weight): ~20%', 'info');
}
function InfoAssignments(){
    UI.showAlert('Home assignments (equal weight): ~20%', 'info');
}
function InfoMidsem(){
    UI.showAlert('Midsem Exams: ~30%', 'info');
}
function InfoExams(){
    UI.showAlert('Sem Exams: ~30%', 'info');
}
