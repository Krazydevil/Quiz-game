

let a = {
    data : [
        {
            
        num : 'question1',
        id : 1,
        question : 'who is batman',
        answer : 'bruce wayne',
        options:['clark kent','bruce whyne', 'wonder women','srinivas']

        },
        {
            
        num : 'question2',
        id : 2,
        question : 'who is spiderman',
        answer : 'peter parker',
        options:['clark kent','peter parker', 'wonder women','srinivas']

        },
        {
            
        num : 'question3',
        id : 3,
        question : 'who is ironman',
        answer : 'tony stark',
        options:['clark kent','bruce whyne', 'tony stark','srinivas']

        },
        {
            
        num : 'question4',
        id : 4,
        question : 'who is hulk',
        answer : 'bruce banner',
        options:['bruce banner','bruce whyne', 'wonder women','srinivas']

        },
        {
            
        num : 'question5',
        id : 5,
        question : 'who is superman',
        answer : 'christopher',
        options:['clark kent','christopher', 'wonder women','srinivas']

        },
        {
            
        num : 'question6',
        id : 6,
        question : 'who is antman',
        answer : 'paul rudd',
        options:['clark kent','bruce whyne', 'wonder women','srinivas']

        },
        {
            
        num : 'question7',
        id : 7,
        question : 'who is doctostrange',
        answer : 'benedict',
        options:['benedict','bruce whyne', 'wonder women','srinivas']

        },
        {
            
            num : 'question8',
            id : 8,
            question : 'who is superman',
            answer : 'christopher',
            options:['clark kent','christopher', 'wonder women','srinivas']
        },
        {
            
            num : 'question9',
            id : 9,
            question : 'who is hulk',
            answer : 'bruce banner',
            options:['bruce banner','bruce whyne', 'wonder women','srinivas']
    

        },
        {
            
            num : 'question10',
            id : 10,
            question : 'who is doctostrange',
            answer : 'benedict',
            options:['benedict','bruce whyne', 'wonder women','srinivas']

        },
        {
            
        num : 'question11',
        id : 11,
        question : 'who is batman',
        answer : 'bruce wayne',
        options:['clark kent','bruce whyne', 'wonder women','srinivas']

        },
        {
            
            num : 'question12',
            id : 12,
            question : 'who is doctostrange',
            answer : 'benedict',
            options:['benedict','bruce whyne', 'wonder women','srinivas']
    

        },
        {
            num : 'question13',
            id : 13,
            question : 'who is antman',
            answer : 'paul rudd',
            options:['clark kent','bruce whyne', 'wonder women','srinivas']
    

        },
        {
            num : 'question14',
            id : 14,
            question : 'who is doctostrange',
            answer : 'benedict',
            options:['benedict','bruce whyne', 'wonder women','srinivas']
        },
        {
            
            num : 'question15',
            id : 15,
            question : 'who is superman',
            answer : 'christopher',
            options:['clark kent','christopher', 'wonder women','srinivas']
        },
        {
            
        num : 'question16',
        id : 16,
        question : 'who is batman',
        answer : 'bruce wayne',
        options:['clark kent','bruce whyne', 'wonder women','srinivas']

        },
        {
            
            num : 'question17',
            id : 17,
            question : 'who is antman',
            answer : 'paul rudd',
            options:['clark kent','bruce whyne', 'wonder women','srinivas']

        },
        {
            
            num : 'question18',
            id : 18,
            question : 'who is superman',
            answer : 'christopher',
            options:['clark kent','christopher', 'wonder women','srinivas']

        },
        {
            
        num : 'question19',
        id : 19,
        question : 'who is batman',
        answer : 'bruce wayne',
        options:['clark kent','bruce whyne', 'wonder women','srinivas']

        },
        {
            
            num : 'question20',
            id : 20,
            question : 'who is superman',
            answer : 'christopher',
            options:['clark kent','christopher', 'wonder women','srinivas']

        },

        
    ]
}
let quest;
let ans = [];             
let count = 0;
for(let i=0;i<5;i++)
{
let random = Math.trunc(Math.random()*20);

    quest = a.data[random];
    let opt = quest.options
    let [x,y,p,q] = opt;
    let d=`<div class = "ss"> ${quest.question}?</div>
    <div class = "dd">
        <input type = "radio" class="ee" name = "ff ${count}" ><span class="sss"> ${x}</span>   
        <input type = "radio" class="ee" name = "ff ${count}" ><span class="sss"> ${y}</span>   
        <input type = "radio" class="ee" name = "ff ${count}" ><span class="sss"> ${p}</span>   
        <input type = "radio" class="ee" name = "ff ${count}" ><span class="sss"> ${q}</span>   
   
        </div>`
    count++;
    ans.unshift(quest.answer)

    document.querySelector('.container').insertAdjacentHTML('afterbegin',d);

    
}

let result=0;
let arr = 0;
document.querySelector('.submit').addEventListener('click',feat)

function feat(){
    for(let i=0;i<document.querySelectorAll('.sss').length;i++)
    {
        let che = document.querySelectorAll('.ee')[i].checked
        if(che == true)
        {
           let user = document.querySelectorAll('.sss')[i].innerHTML;
           if(user == ans[arr]){
                console.log('correct')
                result++;
            }
            arr++;
        }
    } 
}



