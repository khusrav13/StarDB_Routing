import React from 'react';
import { StarshipList } from '../sw-components';
import { withRouter } from 'react-router';


const StarshipsPage = ({ history }) => {
    return (
      <StarshipList 
        onItemSelected={(Id) => {history.push(Id)}}/>
    );
};

export default withRouter(StarshipsPage);