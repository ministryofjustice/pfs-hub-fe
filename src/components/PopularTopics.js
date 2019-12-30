import React from 'react'

const PopularTopics = () => {
    const popularTopics = [
        {
            title: 'Visits',
            url: '/content/4203',
        },
        {
            title: 'IEP',
            url: '/content/4204',
        },
        {
            title: 'Games',
            url: '/content/3621',
        },
        {
            title: 'Inspiration',
            url: '/content/3659',
        },
        {
            title: 'Music & talk',
            url: '/content/3662',
        },
        {
            title: 'PSIs & PSOs',
            url: '/tags/796',
        },
        {
            title: 'Facilities list & catalogues',
            url: ''//getFacilitiesListFor(establishmentId),
        },
        {
            title: 'Healthy mind & body',
            url: '/content/3657',
        },
        {
            title: 'Money & debt',
            url: '/content/4201',
        },
    ]

    return (
        <div className="popular-topics">
            <h3 className="govuk-heading-s">Popular topics</h3>
            <ul>
            {popularTopics.map(topic => {
                return <li key={topic.title}><a href={topic.url} className="govuk-link">{topic.title}</a></li>
            })}
            </ul>
        </div>
    )
}

export default PopularTopics
