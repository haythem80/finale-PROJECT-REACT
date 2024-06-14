import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';

const Information = ({ pes }) => {
  const { id } = useParams();
  const section = pes.find((el) => el.id == id);

  if (!section) {
    return <div>Item not found</div>;
  }

  return (
    <div>
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    className='card2'
  >
    <Image
      objectFit='cover'
      maxW={{ base: '100%', sm: '450px' }}
      src={section.image}
      alt='Caffe Latte'
    />
  
    <Stack>
      <CardBody>
        <Heading size='md'>{section.name}</Heading>
        <Text py='2'>
          {section.description}
        </Text>
        <Text py='2'>
          Population:   {section.population}
        </Text>
        <Text py='2'>
          Currency:    {section.currency}
        </Text>
        <Text py='2'>
          Top-attraction:  {section.top_attractions[0]}/{section.top_attractions[1]}/{section.top_attractions[2]}
        </Text>
        <Text py='2'>
          Activities:    {section.activities[0]} /  {section.activities[1]} / {section.activities[2]}
        </Text>
        <Text py='2'>
          local_dishes:    {section.local_dishes[0]} /  {section.local_dishes[1]} / {section.local_dishes[2]}
        </Text>
      </CardBody>
  
      <CardFooter>
        <Button variant='solid' colorScheme='blue' className='footercard'>
          Add to card
        </Button>
      </CardFooter>
    </Stack>
  </Card>
    </div>
  );
};

export default Information;