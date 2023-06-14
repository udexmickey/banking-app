import React, { useEffect, useState } from 'react'
import { Button, ButtonProps } from 'react-bootstrap'

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export const PayButton: React.FC<ButtonProps> = ({ ...props }) => {
    const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleLoading = () => {
    !isLoading ? setLoading(true) : null
  };
  
  return (
    <>
        <Button 
          disabled={props.disabled}
          onClick={handleLoading}
          variant="primary" 
          size="lg"
          defaultValue={props.defaultValue}
          type={props.type}
          className={props.className}
        >
          {isLoading ? 'Loading…' : props.defaultValue}
        </Button>
    </>
  )
}
