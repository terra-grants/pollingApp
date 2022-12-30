import { Auto, Page } from "components/layout"
import { GET_POLLS } from "utils/api/queryPolls";
import { useQuery } from "@apollo/client";
import PollCard from "./PollCard";
const Polls = () => {
  const { loading, error, data } = useQuery(GET_POLLS);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const todayDate = new Date();

  return (
    <Page title="Polls">
      <Auto
        columns={[
          <>
            {data.polls.data.map((poll: any) => (
              <PollCard poll={poll} />
            ))}

          </>,
          <>
            
          </>,
        ]}
      />
    </Page>
  )
}

export default Polls;
