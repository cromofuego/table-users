const sortByName = (a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
    } else if (b.name.toLowerCase() > a.name.toLowerCase()) {
        return -1;
    } else {
        return 0;
    }
};

const sortByWebsite = (a, b) => {
    if (a.website.toLowerCase() > b.website.toLowerCase()) {
        return 1;
    } else if (b.website.toLowerCase() > a.website.toLowerCase()) {
        return -1;
    } else {
        return 0;
    }
};

const sortByEmail = (a, b) => {
    if (a.email.toLowerCase() > b.email.toLowerCase()) {
        return 1;
    } else if (b.email.toLowerCase() > a.email.toLowerCase()) {
        return -1;
    } else {
        return 0;
    }
};

const sortByNumberAscend = (a, b) => {
    return a.id - b.id;
}

const sortByStatus = (a, b) => {
    // true values first
    return (a.status === b.status) ? 0 : a.status ? -1 : 1;
}


function formatedDate(date) {
    const dateSlice = date.split('T')
    return dateSlice[0]
}

function Random(number) {
    if (number % 2 === 0) return false
    return true
}


export { sortByName, sortByWebsite, sortByEmail, sortByNumberAscend, sortByStatus, formatedDate, Random };