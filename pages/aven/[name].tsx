import React from 'react';
import { Avengers } from '../../data';
// import styled from 'styled-components';

const name: React.FC = () => {
    return (
        <div>
            {Avengers.map(aven => aven.name)}
        </div>
    );
};

export default name;