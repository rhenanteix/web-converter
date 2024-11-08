import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo, homeObjFour} from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Home;