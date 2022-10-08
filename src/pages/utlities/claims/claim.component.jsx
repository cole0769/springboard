import React, { Component } from 'react';
// import { AccountCardList } from './account-card-list/account.card-list.component';
import { ClaimCardList } from './claim-card-list/claim.card-list.component';
import SiblingClaimTable from './claim-list/sibling.table.component';
import './claim.styles.scss'


class ClaimSearchResults extends Component {
    constructor(props) {
        super(props)   ;

        // this.state = {accounts: [], claimId: (window.location.search.split('='))[1], show: false};
        this.state = {parents: [], siblings: [], fulfillment: [], claimId: '', show: false};
        console.log( (window.location.search.split('='))[1]); // get the phone number from URL
    }

    /*** Fetch json array of objects from given url and update state. */
    async componentDidMount() {
        const claim = (window.location.search.split('='))[1];// get the phone number from URL
        const url = "http://localhost:3001/api/claim/getparent/" + claim.replace('+',''); // strip out any leading plus sign
        const f_url = "http://localhost:3001/api/claim/getfulfillment/" + claim.replace('+',''); // strip out any leading plus sign
        console.log(url);
        this.setState({isLoading: true});
        await fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ parents: data })) 
            .catch((err) => {
                console.log(err);
            });
        

        // await fetch(f_url)
        //     .then(response => response.json())
        //     .then(data => this.setState({ fulfillment: data })) 
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }

    render() {
        const {parents} = this.state;
        const {claimId} = this.state;
        // const {fulfillment} = this.state;

        //   list view of accounts
        return (
            <div className='account-container' >
                <div className="container-header" >
                    <h1>Customer Claim List</h1>
                </div>
                <div className="account-list-view">
                    <ClaimCardList accounts={parents} />
                    <SiblingClaimTable claimId={claimId} />
                    {/* <FulfillmentCardList accounts={fulfillment} /> */}
                </div>
            </div>
        );
    }
}

export default ClaimSearchResults;