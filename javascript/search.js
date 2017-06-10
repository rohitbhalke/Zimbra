/**
 * Created by bhalker on 10/06/17.
 */
(function(){


    function SearchUtil() {}

    SearchUtil.prototype.search = function(event, manager) {

        let listOfMails = manager.mailContainer.querySelectorAll('.mail');
        var searchText = manager.search.value;
        searchText = searchText.toLowerCase();

        for(let i=0;i<listOfMails.length;i++){
            let mail = listOfMails[i];
            let divText = mail.querySelector(".title").innerText.toLowerCase();
            if(divText.indexOf(searchText) === -1 && searchText.length!=0){
                this.add(mail, 'hide');
            }
            else {
                this.remove(mail, 'hide');
            }
        }

    };


    SearchUtil.prototype.remove = function(element, className){
        if(element.classList.contains(className)){
            element.classList.remove(className);
        }

    };

    SearchUtil.prototype.add = function(element, className){
        if(!element.classList.contains(className)){
            element.classList.add(className);
        }
    };

    if(!window.EmailSystem)
        window.EmailSystem = {};

    window.EmailSystem.searchUtil = SearchUtil;

}());