import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// import { AllQuotes } from './components/pages/AllQuotes';
// import { QuoteDetail } from './components/pages/QuoteDetail';
// import { NewQuote } from './components/pages/NewQuote';
// import { NotFound } from './components/pages/NotFound';
import { Layout } from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(()=>import('./components/pages/NewQuote'));
const QuoteDetail = React.lazy(()=>import('./components/pages/QuoteDetail'));
const AllQuotes = React.lazy(()=>import('./components/pages/AllQuotes'));
const NotFound = React.lazy(()=>import('./components/pages/NotFound'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'>Loading...</div>}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route >
          <Route path='/quotes/:quoteId'>
            <QuoteDetail />
          </Route>
          <Route path='/newquote' component={NewQuote}>
            {/* <NewQuote /> */}
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
