(function(obj){
    
    Object.prototype = Object.create()
    obj.prototype.test = function(){
        console.log(this);
    }

    function setAniRepeat (ele,cls) {
        // ele.addEventListener("mousedown",function(e){
        //     e.preventDefault();
        //     this.classList.add(cls);
        //     var x = e.clientX - (window.pageXOffset + this.getBoundingClientRect().left);
        //     var y = e.clientY - (window.pageXOffset + this.getBoundingClientRect().top);
        //     var highlight = document.createElement("span");
        //     highlight.style.top = y+"px";
        //     highlight.style.left = x+"px";
        //     highlight.classList.add("click-effect");
        //     this.appendChild(highlight);
        //     window.addEventListener("mouseup",function(e){
        //         this.classList.remove(cls);
        //     }.bind(this));
        //     highlight.addEventListener("animationend",function(){
        //         this.remove();
        //     });
        // });
    
        // ele.addEventListener("touchstart",function(e){
        //     e.preventDefault();
        //     this.classList.add(cls);
        //     var x = e.touches[0].clientX - (window.pageXOffset + this.getBoundingClientRect().left);
        //     var y = e.touches[0].clientY - (window.pageXOffset + this.getBoundingClientRect().top);
        //     var highlight = document.createElement("span");
        //     highlight.style.top = y+"px";
        //     highlight.style.left = x+"px";
        //     highlight.classList.add("click-effect");
        //     this.appendChild(highlight);
        //     window.addEventListener("touchend",function(e){
        //         this.classList.remove(cls);
        //     }.bind(this));
        //     highlight.addEventListener("animationend",function(){
        //         this.remove();
        //     });
        // });
    }

})(Object);