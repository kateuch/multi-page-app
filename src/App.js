import React from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";

import { Layout } from "./components/layout/Layout";
import  NewQuote  from './components/pages/NewQuote';
import  NotFound  from './components/pages/NotFound';
import Comments from "./components/comments/Comments";
import  AllQuotes  from './components/pages/AllQuotes';
import  QuoteDetail  from './components/pages/QuoteDetail';

// const NewQuote = React.lazy(() => import("./components/pages/NewQuote"));
// const QuoteDetail = React.lazy(() => import("./components/pages/QuoteDetail"));
// const AllQuotes = React.lazy(() => import("./components/pages/AllQuotes"));
// const NotFound = React.lazy(() => import("./components/pages/NotFound"));

function App() {
  return (
    <Layout>
      {/* <Suspense fallback={<div className="centered">Loading...</div>}> */}
        <Routes>
          <Route path="/" element={<Navigate to="/quotes" />} />
          {/* <Redirect to="/quotes" /> */}
          <Route path="/quotes" element={<AllQuotes />} />
          <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
            <Route
              path=""
              element={
                <div className="centered">
                  <Link className="btn-flat" to={`comments`}>
                    Load comments
                  </Link>
                </div>
              }
            />
            <Route path={`comments`} element={<Comments />} />
          </Route>
          <Route path="/newquote" element={<NewQuote />} />
          {/* <Route path='/newquote' component={NewQuote}> */}
          {/* <NewQuote /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      {/* </Suspense> */}
    </Layout>
  );
}

export default App;
