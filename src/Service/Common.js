

export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export const getUserData = () => {
    if (localStorage.getItem('userData')) {
        return JSON.parse(localStorage.getItem('userData'));
    } else {
        return {};
    }
}



export const getImage = (path, fileName) => {
    return require(`${path + fileName.toLowerCase()}`);
}

export const getEmpId = () => {

    if (localStorage.getItem('userData')) {
        let empId = JSON.parse(localStorage.getItem('userData')).empId;
        if (empId) {
            return empId
        } else {
            return null;
        }
    }
};

export const getEmpName = () => {

    if (localStorage.getItem('userData')) {
        let name = JSON.parse(localStorage.getItem('userData')).name;
        if (name) {
            return name
        } else {
            return null;
        }
    }
};

export const groupByKey = (array, key) => {
    return array.reduce((result, currentValue) => {
        (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
        return result;
    }, {});
}

// export const sortAdminDataByDate = (array) => {
//     if (array.length > 0) {
//         array.sort((a, b) => {
//             let dateA = new Date(a.CreatedDate);
//             let dateB = new Date(b.CreatedDate);
//             return dateA - dateB;
//         });
//     }
// };

export const getIndicationText = (itemObj) => {
    if (itemObj === 'tdr') {
        return "Tdr";
    }
    else if (itemObj === 'aa') {
        return 'Aplastic Anaemia';
    } else if (itemObj === 'itp') {
        return 'Immune Thrombocytopenic Purpura';
    } else {
        return '-NA-';
    }
}





