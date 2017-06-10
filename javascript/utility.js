(function(){


    function Helper(){};

    Helper.prototype.getRandomTitle = function () {
        let arr = ["Sender Name", "Person Name", "Zimbra Tech", "Rohit Bhalke", "Laurem Ipusm"];
         let randomNum = Math.floor(Math.random()*arr.length)
        return arr[randomNum]
    };

    Helper.prototype.getRandomSubject = function() {
        let arr = ["Mail subject content", "This is subject of email", "Mail subject Content", "Email collaboration system", "Winter is coming"];
        let randomNum = Math.floor(Math.random()*arr.length)
        return arr[randomNum];
    };

    Helper.prototype.formatEmail = function(from, subject) {
        let mail = document.createElement("div");
        mail.classList.add("mail");
        let uniqueNum = new Date().getTime();
        mail.setAttribute('data-id', uniqueNum);

        let one =  document.createElement("div");
        one.setAttribute("id", "one");
        one.classList.add('left');
        let two = document.createElement("div");
        two.setAttribute("id", "two");
        two.classList.add('left');

        let checkbox = document.createElement("input");
        checkbox.type= "checkbox";
        checkbox.setAttribute('class', 'mailcheckbox');
        checkbox.setAttribute('data-id', uniqueNum);

        one.appendChild(checkbox);

        let three = document.createElement("div");
        let four = document.createElement("div");

        two.appendChild(three);
        two.appendChild(four);

        three.innerHTML = from;
        three.classList.add("title");
        four.innerHTML = subject;

        mail.appendChild(one);
        mail.appendChild(two);

        mail.setAttribute('draggable', true);

        return mail;
    };

    if(!window.EmailSystem)
        window.EmailSystem = {};

    window.EmailSystem.util = Helper;

}());