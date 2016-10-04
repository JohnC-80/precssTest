
var Ajax = (function(){
    
    
    function getJSON(path){
        this.request = new XMLHttpRequest();
        var ts = "?"+ new Date().getTime();
        
        this.request.open("GET", path + ts);
        this.request.responseType = 'text';
        this.request.send();
        
        return this;
    };
    
    function success(cb, context){
        this.request.onloadend = function(){
            cb.call(context, this.responseText);
        };
        return this;
    }
    
    return{
        getJSON : getJSON,
        success: success
    };
})();

export default Ajax;
