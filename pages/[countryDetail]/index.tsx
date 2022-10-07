import { useRouter, withRouter } from 'next/router';
import React from 'react';
import CountryDetails from '../../components/CoutryDetail/CountryDetails';

const CountryDetailsPage = () => {
    const router = useRouter();
    console.log(router.asPath);
    

    return (
        <>
            <CountryDetails cca={router.asPath}/>
        </>
    );
};

export default CountryDetailsPage;