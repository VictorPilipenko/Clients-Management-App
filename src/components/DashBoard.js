import React from 'react';
import ClientList from './ClientList';
import ClientFilter from './ClientFilter';
import ClientDetail from './ClientDetail';

const DashBoard = () => (
    <div> 
           <div className='container__list'>
                <ClientFilter />
                <ClientList />
            </div>


             <div className='container__box'>      
                 <ClientDetail />
            </div>
    </div>
);

export default  DashBoard;