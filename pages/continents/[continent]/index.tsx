import { useRouter } from 'next/router';
import React from 'react';
import ContinentAllCountries from '../../../components/Continents/ContinentAllCountries';

const Continent = () => {
    const router = useRouter();
    console.log(router.query.continent);
    return (
        <div>
            <ContinentAllCountries region={router.query.continent} />
        </div>
    );
};

export default Continent;