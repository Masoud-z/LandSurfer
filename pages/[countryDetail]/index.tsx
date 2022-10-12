import { useRouter } from 'next/router';
import React from 'react';
import CountryDetails from '../../components/CoutryDetail/CountryDetails';

const CountryDetailsPage = () => {
    const router = useRouter();
    console.log(router.asPath);
    

    return (
        <>
            <CountryDetails key={router.asPath} cca={router.asPath}/>
        </>
    );
};

export default CountryDetailsPage;