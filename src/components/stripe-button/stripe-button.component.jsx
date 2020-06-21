import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //stripe takes price in cents
  const publishableKey =
    "pk_test_51GwQnJDGmVqbKctFN2sOdB3ZgSFduc3tUN2MUGzv7Hd1IJ6Z7PFN5cs884wWedA0rXAZQzdlvvuCf7DxOMwRrHxR00uYeHZeGd";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
