import mandatory from '../consts/mandatory';


class CheckData
{
    isValid(rest){
        console.log(rest);
        // let ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        // if(inputText.value.match(ipformat))



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