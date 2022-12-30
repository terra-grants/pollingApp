/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POLL } from 'utils/api/queryPolls';
import parse, { Element } from 'html-react-parser';
import styles from './SinglePollPage.module.scss'
import { Container, Grid } from 'components/layout';
import { Button } from 'components/general';
type Props = {}

const SinglePollPage = (props: Props) => {
    const { id } = useParams<{ id: string }>();
    const { loading, error, data } = useQuery(GET_POLL, {
        variables: { id: id },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    
    console.log(data.poll.data.attributes.title)


  return (
    <Container>
    <div>
        <div className={styles.dateArea}>
            <p>Start Date: {data.poll.data.attributes.startDate}</p>  
            <p>End Date: {data.poll.data.attributes.endDate}</p>
        </div>

        <h1>{data.poll.data.attributes.title}</h1>
        
        {parse(data.poll.data.attributes.description)}

        <div>
          <h2>Current votes:</h2>
          <p>Yes: {data.poll.data.attributes.yes}</p>
          <p>No: {data.poll.data.attributes.no}</p>
          <p>Abstain: {data.poll.data.attributes.abstain}</p>
          <p>No With Veto: {data.poll.data.attributes.noWithVeto}</p>
        </div>

        <div>
          <h2>Vote:</h2>
          <Grid columns={5} gap={32}>
          <Button>Yes</Button>
          <Button>No</Button>
          <Button>Abstain</Button>
          <Button>No With Veto</Button>
          </Grid>
        </div>



        
    </div>
    </Container>
  )
}

export default SinglePollPage