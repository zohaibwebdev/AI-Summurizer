import React from 'react'
import SummaryForm from './summary-form/summary-form.component'
import SummaryHistory from './summary-history/summary-history.component'
import SummaryDetail from './summary-detail/summary-detail.component'

const history = ['www.google.com', 'www.facebook.com', 'www.awais.com']
const loading = false
const summary = 'summary'
const errorMessage = 'error'
const Summary = () => {
    return (
        <div className="mt-5 px-5">
            <SummaryForm />
            <SummaryHistory history={history} />
            <SummaryDetail loading={loading} summary={summary} error={errorMessage} />
        </div>
    )
}

export default Summary
