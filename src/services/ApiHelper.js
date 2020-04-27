import axios from 'axios'

const id = 'JFXW0132AMGNT4GHJNYSXGXOS4JM0W05Z2TCSKVKX0ICF1ZG'
const secret = '1FESXTTSHXBKK5AMFXVCDOHCBBFRI43J5SGD05EBBC1EL0GS'

// const idURL = `https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=${id}&client_secret=${secret}&v=${vDate()}`

function vDate() {
    let today = new Date()
    let day = today.getDate().toString();
    let mon = today.getMonth() + 1;
    mon = (mon < 10) ? '0' + mon.toString() : mon.toString();
    var year = today.getFullYear().toString();
    var dateString = year + mon + day;
    return (dateString);
}

// New York 
export const findNYBar = async (search) => {
    const searchURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&query=${search}&categoryId=4bf58dd8d48988d116941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const response = await axios.get(searchURL)
    return response
}
export const barsNYList = async () => {
    const allURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d116941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const responseAll = await axios.get(allURL)
    return responseAll
}

export const loungesNYList = async () => {
        const loungeURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d121941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
        const loungeAll = await axios.get(loungeURL)
        return loungeAll
    }
    
export const cocktailNYList = async () => {
        const cocktailURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d11e941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
        const cocktailAll = await axios.get(cocktailURL)
        return cocktailAll
    }
export const sportsBarNYList = async () => {
    const sportsBarURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d11d941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const sportsbarAll = await axios.get(sportsBarURL)
    return sportsbarAll
}
export const hookahNYList = async () => {
    const hookahURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d119941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const hookahAll = await axios.get(hookahURL)
    return hookahAll
}
export const diveBarNYList = async () => {
    const diveBarURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d118941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const diveBarAll = await axios.get(diveBarURL)
    return diveBarAll
    
}
export const whiskeyNYList = async () => {
    const whiskeyURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d122941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const whiskeyAll = await axios.get(whiskeyURL)
    return whiskeyAll
}
// ATL
export const findATLBar = async (search) => {
    const searchURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&query=${search}&categoryId=4bf58dd8d48988d116941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const response = await axios.get(searchURL)
    return response
}
export const barsATLList = async () => {
    const allURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d116941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const responseAll = await axios.get(allURL)
    return responseAll
}

export const loungesATLList = async () => {
        const loungeURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d121941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
        const loungeAll = await axios.get(loungeURL)
        return loungeAll
    }
    
export const cocktailATLList = async () => {
        const cocktailURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d11e941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
        const cocktailAll = await axios.get(cocktailURL)
        return cocktailAll
    }
export const sportsBarATLList = async () => {
    const sportsBarURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d11d941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const sportsbarAll = await axios.get(sportsBarURL)
    return sportsbarAll
}
export const hookahATLList = async () => {
    const hookahURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d119941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const hookahAll = await axios.get(hookahURL)
    return hookahAll
}
export const diveBarATLList = async () => {
    const diveBarURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d118941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const diveBarAll = await axios.get(diveBarURL)
    return diveBarAll
    
}
export const whiskeyATLList = async () => {
    const whiskeyURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d122941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const whiskeyAll = await axios.get(whiskeyURL)
    return whiskeyAll
}
// DC
export const findDCBar = async (search) => {
    const searchURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&query=${search}&categoryId=4bf58dd8d48988d116941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const response = await axios.get(searchURL)
    return response
}
export const barsDCList = async () => {
    const allURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d116941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const responseAll = await axios.get(allURL)
    return responseAll
}

export const loungesDCList = async () => {
        const loungeURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d121941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
        const loungeAll = await axios.get(loungeURL)
        return loungeAll
    }
    
export const cocktailDCList = async () => {
        const cocktailURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d11e941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
        const cocktailAll = await axios.get(cocktailURL)
        return cocktailAll
    }
export const sportsBarDCList = async () => {
    const sportsBarURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d11d941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const sportsbarAll = await axios.get(sportsBarURL)
    return sportsbarAll
}
export const hookahDCList = async () => {
    const hookahURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d119941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const hookahAll = await axios.get(hookahURL)
    return hookahAll
}
export const diveBarDCList = async () => {
    const diveBarURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d118941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const diveBarAll = await axios.get(diveBarURL)
    return diveBarAll
    
}
export const whiskeyDCList = async () => {
    const whiskeyURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d122941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const whiskeyAll = await axios.get(whiskeyURL)
    return whiskeyAll
}
// Houston
export const findHOUBar = async (search) => {
    const searchURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&query=${search}&categoryId=4bf58dd8d48988d116941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const response = await axios.get(searchURL)
    return response
}
export const barsHOUList = async () => {
    const allURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d116941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const responseAll = await axios.get(allURL)
    return responseAll
}

export const loungesHOUList = async () => {
        const loungeURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d121941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
        const loungeAll = await axios.get(loungeURL)
        return loungeAll
    }
    
export const cocktailHOUList = async () => {
        const cocktailURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d11e941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
        const cocktailAll = await axios.get(cocktailURL)
        return cocktailAll
    }
export const sportsBarHOUList = async () => {
    const sportsBarURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d11d941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const sportsbarAll = await axios.get(sportsBarURL)
    return sportsbarAll
}
export const hookahHOUList = async () => {
    const hookahURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d119941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const hookahAll = await axios.get(hookahURL)
    return hookahAll
}
export const diveBarHOUList = async () => {
    const diveBarURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d118941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const diveBarAll = await axios.get(diveBarURL)
    return diveBarAll
    
}
export const whiskeyHOUList = async () => {
    const whiskeyURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d122941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const whiskeyAll = await axios.get(whiskeyURL)
    return whiskeyAll
}
// LA
export const findLABar = async (search) => {
    const searchURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&query=${search}&categoryId=4bf58dd8d48988d116941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const response = await axios.get(searchURL)
    return response
}
export const barsLAList = async () => {
    const allURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d116941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const responseAll = await axios.get(allURL)
    return responseAll
}

export const loungesLAList = async () => {
        const loungeURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d121941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
        const loungeAll = await axios.get(loungeURL)
        return loungeAll
    }
    
export const cocktailLAList = async () => {
        const cocktailURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d11e941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
        const cocktailAll = await axios.get(cocktailURL)
        return cocktailAll
    }
export const sportsBarLAList = async () => {
    const sportsBarURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d11d941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const sportsbarAll = await axios.get(sportsBarURL)
    return sportsbarAll
}
export const hookahLAList = async () => {
    const hookahURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d119941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const hookahAll = await axios.get(hookahURL)
    return hookahAll
}
export const diveBarLAList = async () => {
    const diveBarURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d118941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const diveBarAll = await axios.get(diveBarURL)
    return diveBarAll
    
}
export const whiskeyLAList = async () => {
    const whiskeyURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d122941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const whiskeyAll = await axios.get(whiskeyURL)
    return whiskeyAll
}
// MIA
export const findMIABar = async (search) => {
    const searchURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&query=${search}&categoryId=4bf58dd8d48988d116941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const response = await axios.get(searchURL)
    return response
}
export const barsMIAList = async () => {
    const allURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d116941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const responseAll = await axios.get(allURL)
    return responseAll
}

export const loungesMIAList = async () => {
        const loungeURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d121941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
        const loungeAll = await axios.get(loungeURL)
        return loungeAll
    }
    
export const cocktailMIAList = async () => {
        const cocktailURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d11e941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
        const cocktailAll = await axios.get(cocktailURL)
        return cocktailAll
    }
export const sportsBarMIAList = async () => {
    const sportsBarURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d11d941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const sportsbarAll = await axios.get(sportsBarURL)
    return sportsbarAll
}
export const hookahMIAList = async () => {
    const hookahURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d119941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const hookahAll = await axios.get(hookahURL)
    return hookahAll
}
export const diveBarMIAList = async () => {
    const diveBarURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d118941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const diveBarAll = await axios.get(diveBarURL)
    return diveBarAll
    
}
export const whiskeyMIAList = async () => {
    const whiskeyURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d122941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const whiskeyAll = await axios.get(whiskeyURL)
    return whiskeyAll
}

// NO
export const findNOBar = async (search) => {
    const searchURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&query=${search}&categoryId=4bf58dd8d48988d116941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const response = await axios.get(searchURL)
    return response
}
export const barsNOList = async () => {
    const allURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d116941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const responseAll = await axios.get(allURL)
    return responseAll
}

export const loungesNOList = async () => {
        const loungeURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d121941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
        const loungeAll = await axios.get(loungeURL)
        return loungeAll
    }
    
export const cocktailNOList = async () => {
        const cocktailURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d11e941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
        const cocktailAll = await axios.get(cocktailURL)
        return cocktailAll
    }
export const sportsBarNOList = async () => {
    const sportsBarURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d11d941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const sportsbarAll = await axios.get(sportsBarURL)
    return sportsbarAll
}
export const hookahNOList = async () => {
    const hookahURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d119941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const hookahAll = await axios.get(hookahURL)
    return hookahAll
}
export const diveBarNOList = async () => {
    const diveBarURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d118941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const diveBarAll = await axios.get(diveBarURL)
    return diveBarAll
    
}
export const whiskeyNOList = async () => {
    const whiskeyURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d122941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const whiskeyAll = await axios.get(whiskeyURL)
    return whiskeyAll
}

// PHX
export const findPHXBar = async (search) => {
    const searchURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&query=${search}&categoryId=4bf58dd8d48988d116941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const response = await axios.get(searchURL)
    return response
}
export const barsPHXList = async () => {
    const allURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d116941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const responseAll = await axios.get(allURL)
    return responseAll
}

export const loungesPHXList = async () => {
        const loungeURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d121941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
        const loungeAll = await axios.get(loungeURL)
        return loungeAll
    }
    
export const cocktailPHXList = async () => {
        const cocktailURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d11e941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
        const cocktailAll = await axios.get(cocktailURL)
        return cocktailAll
    }
export const sportsBarPHXList = async () => {
    const sportsBarURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d11d941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const sportsbarAll = await axios.get(sportsBarURL)
    return sportsbarAll
}
export const hookahPHXList = async () => {
    const hookahURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d119941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const hookahAll = await axios.get(hookahURL)
    return hookahAll
}
export const diveBarPHXList = async () => {
    const diveBarURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d118941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const diveBarAll = await axios.get(diveBarURL)
    return diveBarAll
    
}
export const whiskeyPHXList = async () => {
    const whiskeyURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d122941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const whiskeyAll = await axios.get(whiskeyURL)
    return whiskeyAll
}
