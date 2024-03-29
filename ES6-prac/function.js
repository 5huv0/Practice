 var javascript = {
    name : "javascript",
    libraries : ["angular" , "vue" , "react"],
    printLibraries : function (){
        this.libraries.forEach((a) =>
            console.log(`${this.name} loves ${a}`))
    } 
}

javascript.printLibraries();
