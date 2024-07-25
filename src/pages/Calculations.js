import React, { useContext, useEffect, useState } from 'react';
import { Container, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { MainContext } from '../context/MainContextProvider';

const Calculations = () => {
  const { localData } = useContext(MainContext);
  const [userData, setUserData] = useState(localData);

  useEffect(() => {
    setUserData(localData);
  }, [localData]);

  return (
    <Container maxW='container.xl' my={10}>
      <Table variant='striped' colorScheme='gray' borderWidth='1px' borderRadius='lg'>
        <Thead>
          <Tr>
            <Th>İsim</Th>
            <Th>BMI</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array.isArray(userData) && userData.length === 0 ? (
            <Tr><Td>No one yet...</Td><Td></Td></Tr>
          ) : (
            userData?.map((item, index) => (
              <Tr key={index}>
                <Td>{item?.name}</Td>
                <Td>{item?.bmi.toFixed(2)}</Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </Container>
  );
};

export default Calculations;
