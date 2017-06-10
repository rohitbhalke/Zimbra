
(function(){

    var manager;

    function EmailManager () {

        this.noOfEmail = 0;
        this.trash = document.getElementById('trash');
        this.add = document.getElementById("addmail");
        this.delete = document.getElementById("deletemail");
        this.search = document.getElementById("searchmail");
        this.selectAll = document.getElementById("selectallcheckbox");

        this.mailContainer = document.getElementById("mailcontainer");
        this.body = document.body;
    }

    EmailManager.prototype.attachEventListners = function() {
        var self = this;
        this.add.addEventListener('click', function () {
            self.addEmail.bind(self)();
        });

        this.delete.addEventListener('click', function () {
            self.deleteEmail.bind(self)();
        });

        this.selectAll.addEventListener('click', function(){
            self.selectEmails.bind(self)();
        });

        this.search.addEventListener('keyup', function(e){
            self.searchUtil.search(e, self);
        });
    };


    EmailManager.prototype.dropHandler = function(event, dragged) {
        debugger;
        if(event.target.id === 'trash') {

        }
    };

    EmailManager.prototype.selectEmails = function () {
        var checkboxes = document.querySelectorAll('input[type=checkbox]'), value=false;
        value = this.selectAll.checked ? true : false
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = value;
        })
    };

    EmailManager.prototype.addEmail = function() {
        let from = this.util.getRandomTitle();
        let subject = this.util.getRandomSubject();
        let emailDom = this.util.formatEmail(from, subject);
        this.mailContainer.appendChild(emailDom);
    };

    EmailManager.prototype.deleteEmail = function() {
        var checkboxes = document.querySelectorAll('input[type=checkbox]');
        var self = this;
        var selectedEmails = [], selectAll;

        // if selectall is selected
        if(this.selectAll.checked){
            self.mailContainer.innerHTML = "";
        }
        else{
            for(let i=0; i<checkboxes.length;  i++) {
                if(checkboxes[i].checked) {
                    selectedEmails.push(checkboxes[i].parentNode.parentNode);
                }
            }
            if(selectedEmails.length) {
                selectedEmails.forEach(function(email){
                    self.mailContainer.removeChild(email);
                })
            }
        }

    };


    window.onload = function() {
        var manager = new EmailManager();
        window.EmailSystem.manager = manager;
        manager.util = new EmailSystem.util();
        manager.searchUtil = new EmailSystem.searchUtil();
        manager.dragUtil = new EmailSystem.dragUtil();

        manager.attachEventListners();
    };

    if(!window.EmailSystem) {
        window.EmailSystem = {};
    }
    //window.EmailSystem.manager = EmailManager;


}());
