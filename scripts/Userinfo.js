class Userinfo {
    constructor(nameSelector,aboutSelector){
        this.nameSelector=nameSelector;
        this.aboutSelector=aboutSelector;
        this.nameNode = document.querySelector(nameSelector);
        this.aboutNode=document.querySelector(aboutSelector)
    }

    getUserInfo(){
        const name = this.nameNode.textContent;
        const about= this.aboutNode.textContent;
        return {name, about}
    }
    setUserInfo(name, about){
        this.nameNode.textContent = name;
        this.aboutNode.textContent=about;
    }
}


