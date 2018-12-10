import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';

ReactDOM.render(
    <Family>
        <Member name='Michel' lastName='Silva' />
        <Member name='Ellen' lastName='Silva' />
        <Member name='Michel JR' lastName='Silva' />
    </Family>
    ,document.getElementById('app')
);