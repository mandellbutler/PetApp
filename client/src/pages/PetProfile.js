import React from "react";
import 'materialize-css';
import {Row, Col, Card, Icon, CardTitle} from 'react-materialize';


// import Auth from "../utils/auth";
import { useQuery, } from "@apollo/react-hooks";
import { QUERY_DOGS } from "../utils/queries";

const SavedPets = () => {
  
  const { data } = useQuery(QUERY_DOGS);
//   const userData = data?.me || {};

  return (
    <>

<Row>
  <Col
    m={6}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="#">This is a Link</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle></CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      Here is the standard card with an image thumbnail.
    </Card>
  </Col>
</Row>
</>
  );
};

export default SavedPets;