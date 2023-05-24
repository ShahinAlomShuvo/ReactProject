import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const Analaycis = () => {
  const [chart, setChart] = useState({
    data: [
      { Technology: "Java", Projects: "100" },
      { Technology: "Kotlin", Projects: "40" },
      { Technology: "SQL", Projects: "90" },
      { Technology: "Bootstrap", Projects: "95" },
      { Technology: "Jquery", Projects: "60" },
      { Technology: "React", Projects: "90" },
      { Technology: "PHP", Projects: "100" },
      { Technology: "Angular", Projects: "65" },
    ],
  });

  const { data } = chart;

  return (
    <>
      <Container>
        <h1 className='mainTitle'>Technology Use</h1>
        <Row>
          <Col style={{ width: "50%", height: "300px" }} lg={6} md={12} sm={12}>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart width={100} height={300} data={data}>
                <XAxis dataKey='Technology' />
                <Tooltip />
                <Bar dataKey='Projects' fill='#8884d8' />
              </BarChart>
            </ResponsiveContainer>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <p className='analaycisDesc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              minima quibusdam voluptatibus reiciendis earum quia natus officiis
              corporis recusandae, eligendi, laudantium nihil impedit sint. Non
              omnis assumenda labore facere repudiandae. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Fugiat minima quibusdam
              voluptatibus reiciendis earum quia natus officiis corporis
              recusandae, eligendi, laudantium nihil impedit sint.
            </p>
            <p className='analaycisDesc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              minima quibusdam voluptatibus reiciendis earum quia natus officiis
              corporis recusandae, eligendi, laudantium nihil impedit sint. Non
              omnis assumenda labore facere repudiandae. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Fugiat minima quibusdam
              voluptatibus reiciendis earum quia natus officiis corporis
              recusandae, eligendi, laudantium nihil impedit sint.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Analaycis;
