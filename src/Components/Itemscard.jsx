import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text, WrapItem } from '@chakra-ui/react';
import React from 'react'
import { useDispatch } from 'react-redux';
import { handledelete } from '../redux/action';
import { Link } from 'react-router-dom'


const Itemscard = ({item}) => {

    const dispatch = useDispatch()
  return (
    <div>
    <Card maxW="sm" className="card">
        <CardBody>
          <Image
            className="img"
            src={item.image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{item.country}</Heading>
            <Text className="desc">{item.currency}</Text>
            <Text color="blue.600" fontSize="2xl">
            {item.language}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
          <Link to={`/info/${item.id}`}>
            <Button  colorScheme="blue" >
              Info
            </Button>
            </Link>
            <WrapItem>
              <Button variant="ghost" colorScheme="red" onClick={()=>dispatch(handledelete(item.id))}>
                Delete
              </Button>
            </WrapItem>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Itemscard