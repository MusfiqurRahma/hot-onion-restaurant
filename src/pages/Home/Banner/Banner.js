import Button from '@restart/ui/esm/Button';
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
        <h1 id='header-text'>Best food waiting for your belly</h1>
                <InputGroup className="mb-3 w-25 m-auto">               
                 <FormControl id='search-bar'                     
      placeholder="Search your items"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button variant="outline-secondary" id="search-btn">
      Button
    </Button>
    </InputGroup>
        </div>
    );
};
export default Banner;