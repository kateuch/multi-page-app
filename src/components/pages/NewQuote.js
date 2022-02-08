import React from 'react';
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

import {addQuote} from '../lib/api'
import useHttp from '../hooks/use-http';
import QuoteForm from '../quotes/QuoteForm';

const NewQuote = () => {
    const { sendRequest, status } = useHttp(addQuote);
    const navigate = useNavigate();
    // const history = useHistory();

    useEffect(() => {
if (status === 'completed') {
    navigate('/quotes'); //navigate(-1) - forward to pevious page, navigate(1) - go forward
}
    }, [status, navigate]);

    const onAddQuoteHandler = quoteData => {
      if (quoteData) { sendRequest(quoteData) }
    }
    return <QuoteForm isLoading = {status === 'pending'} onAddQuote={onAddQuoteHandler} />
}

export default NewQuote;