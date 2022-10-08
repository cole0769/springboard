const apiconfig = require('../../../config');

export function getHyperWalletUser(claimid) {
    fetch(apiconfig + '/claim/gethyperwallet/' + claimid, {methid: 'GET'})
        .then(data => data.json())
}