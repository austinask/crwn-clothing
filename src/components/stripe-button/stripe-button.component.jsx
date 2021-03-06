import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KQD2oH5vHpUIhCkFDvyVuKsOPDU8oFKwC9vnQ5bOQpuYflGDWVI8Zq2nziXzvUjVAIRs4wRLNFN7o4lYthC9iVF005ElRLc7w';

    const onToken = token => {
        console.log(token);
        alert('Payment Sucessful')
    }

    return (
        <StripeCheckout
          label='Pay Now'
          name='CRWN Clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;