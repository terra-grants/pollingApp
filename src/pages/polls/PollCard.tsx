import React from 'react'
import styles from './PollCard.module.scss'
import { Link } from 'react-router-dom'
type Props = { 
    poll: any
}

const PollCard = (props: Props) => {
  return (
    <Link to={`/polls/${props.poll.id}`}>
    <div className={styles.card}
    >
       <h1>{props.poll.attributes.title}</h1>
       <p>{props.poll.attributes.shortDescription}</p>
       <div className={styles.dateArea}>
            <p>Start Date: {props.poll.attributes.startDate}</p>
            <p>End Date: {props.poll.attributes.endDate}</p>
       </div>

        

    </div>
    </Link>
  )
}

export default PollCard