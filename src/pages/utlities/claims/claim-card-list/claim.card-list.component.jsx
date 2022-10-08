import React from 'react';
import { ClaimList } from '../claim-list/claim.list.component';
import './claim.card-list.styles.scss';

export const ClaimCardList = props => (
        <div className='account-card-list'>
           {props.accounts.map(claim => (
                <ClaimList key={claim.GangParent} claim={claim} /> 
            ))} 
        </div>
);
 