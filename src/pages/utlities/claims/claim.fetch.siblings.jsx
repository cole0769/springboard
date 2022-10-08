const apiconfig = require('../../../config');

export function getSiblingClaim(claimid) {
    fetch(apiconfig + '/claim/getsibling/' + claimid, {methid: 'GET'})
        .then(data => data.json())
}