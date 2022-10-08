import React from 'react';
import { SiblingList } from '../claim-list/sibling.list.component';
import './siblings.card-list.styles.scss';

export const SiblingsCardList = props => (
        <div className='account-card-list'>
           {props.accounts.map(claim => (
                <SiblingList key={claim.ClaimId} claim={claim} /> 
            ))} 
        </div>
);
 