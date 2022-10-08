import React from 'react';
import { FulfillmentList } from '../claim-list/fulfillment.list.component';
import './fulfillment.card-list.styles.scss';

export const FulfillmentCardList = props => (
        <div className='account-card-list'>
           {props.accounts.map(claim => (
                <FulfillmentList key={claim.GangParent} claim={claim} /> 
            ))} 
        </div>
);
 