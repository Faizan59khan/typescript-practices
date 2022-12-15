var quiz = [
    {
        question: "What is the capital of France?",
        options: {
            option1: "Paris",
            option2: "London",
            option3: "Rome",
            option4: "Madrid"
        },
        correctOption: 'Paris'
    },
    {
        question: "What is the largest planet in our solar system?",
        options: {
            option1: "Earth",
            option2: "Jupiter",
            option3: "Saturn",
            option4: "Neptune"
        },
        correctOption: 'Jupiter'
    },
    {
        question: "What is the symbol for hydrogen in the periodic table?",
        options: {
            option1: "H",
            option2: "He",
            option3: "Li",
            option4: "C"
        },
        correctOption: 'H'
    }
];
function quizProgram(quiz) {
    var div = document.querySelector('#quetions');
    var j = 0;
    quiz.forEach(function (ques) {
        var _a, _b, _c, _d;
        var h3 = document.createElement('h3');
        var select = document.createElement('select');
        select.setAttribute('id', "select".concat(j));
        for (var i = 0; i < quiz.length; i++) {
            var options = document.createElement('option');
            options.innerHTML = (_b = (_a = quiz[j]) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b["option".concat(i + 1)];
            options.setAttribute('value', (_d = (_c = quiz[j]) === null || _c === void 0 ? void 0 : _c.options) === null || _d === void 0 ? void 0 : _d["option".concat(i + 1)]);
            select.appendChild(options);
        }
        h3.innerHTML = ques.question;
        div === null || div === void 0 ? void 0 : div.appendChild(h3);
        div === null || div === void 0 ? void 0 : div.appendChild(select);
        j++;
    });
}
quizProgram(quiz);
function checkAnswers() {
    var div = document.querySelector('#quetions');
    var j = div.childNodes.length / 2;
    for (var k = 0; k < j; k++) {
        var h4 = document.createElement('h4');
        var select = document.querySelector("#select".concat(k));
        if (select.value === quiz[k].correctOption) {
            h4.innerHTML = "".concat(k + 1, " - Correct");
        }
        else {
            h4.innerHTML = "".concat(k + 1, " - Wrong");
        }
        div.appendChild(h4);
    }
}
