import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';

ReactDOM.render(
    <Family lastName='Silva'>
        <Member name='Michel' />
        <Member name='Ellen' />
        <Member name='Michel JR' />
    </Family>
    ,document.getElementById('app')
);