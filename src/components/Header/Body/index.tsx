import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { MdCompareArrows, MdFlag, MdDateRange, MdNearMe } from 'react-icons/md';
import { IoIosSend } from 'react-icons/io';
import { Plus, Circle } from '../../Shape';
import Input from '../../Input';
import Button from '../../Button';
import { Container, ContentHolidayFinder, Image, InputGroup } from './styles';

const Body: React.FC = () => {
  const handleSubmit = useCallback(() => {
    const { log } = console;
    log('submit');
  }, []);
  return (
    <Container>
      <Plus x="40%" y="30%" />
      <ContentHolidayFinder>
        <Circle x="2%" y="70%" />
        <h1>Explore and Travel</h1>
        <h6>Holiday finder</h6>
        <hr />
        <Form onSubmit={() => handleSubmit}>
          <Circle x="45%" y="110%" />
          <InputGroup>
            <Input
              Icon={MdNearMe}
              name="location"
              type="text"
              placeholder="location"
            />
            <Input
              Icon={MdFlag}
              placeholder="Activity"
              name="activity"
              type="text"
            />
          </InputGroup>
          <InputGroup>
            <Input
              Icon={MdCompareArrows}
              placeholder="Grade"
              name="grade"
              type="text"
            />
            <Input Icon={MdDateRange} placeholder="Date" name="date" />
          </InputGroup>
          <Button Icon={IoIosSend} type="submit">
            Explore
          </Button>
        </Form>
      </ContentHolidayFinder>
      <Image />
    </Container>
  );
};

export default Body;
