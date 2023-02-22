const axios = require('axios');

const fetchURL = async () => {
    await axios.get('https://clipboard-landing-page-gold.vercel.app/').then((res) => {
        console.log('res', res)
    }).catch((error) => {
        console.log('error', error)
    })
}

fetchURL();