class CheckData
{
    isValid(){
        console.log('валид валид');
        return true;
    }

    setData(obj){
        let serialObj = JSON.stringify(obj);
        localStorage.setItem("userSettings", serialObj);
    }

    getData(){
        return JSON.parse(localStorage.getItem("userSettings"));
    }
}

export default new CheckData();