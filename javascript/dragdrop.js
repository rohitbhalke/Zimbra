
(function(){

    var dragged, dragger;


    function DragDrop() {
        this.trash = document.getElementById("trash");
        this.attachEvents();
    }

    DragDrop.prototype.unhighlight = function () {
        this.trash.classList.remove('highlight');
    }


    DragDrop.prototype.deleteMail = function() {
        var manager = window.EmailSystem.manager;
        manager.mailContainer.removeChild(dragged);
        this.unhighlight();
    };

    DragDrop.prototype.attachEvents = function() {
        var self = this;
        document.addEventListener("dragstart", function (event) {
            dragged = event.target;
        }, false);

        document.addEventListener("dragover", function (event) {
            event.preventDefault();
        }, false);

        document.addEventListener("dragenter", function (event) {
            var trash = document.getElementById("trash");
            trash.classList.add('highlight');
        }, false);

        document.addEventListener("dragleave", function (event) {

        }, false);

        document.addEventListener("drop", function (e) {

            if(event.target.id==='trash'){
                self.deleteMail();
            }
        })
    }

    if(!window.EmailSystem)
        window.EmailSystem = {};

    window.EmailSystem.dragUtil = DragDrop;

}());