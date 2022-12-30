/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POLL } from 'utils/api/queryPolls';
import parse, { Element } from 'html-react-parser';

type Props = {}

const SinglePollPage = (props: Props) => {
    const { id } = useParams<{ id: string }>();
    const { loading, error, data } = useQuery(GET_POLL, {
        variables: { id: id },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    
  return (
    <div>singlePollPage</div>
  )
}

export default SinglePollPage