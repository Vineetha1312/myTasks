import {useState} from 'react'
import {
  BgContainer,
  CreditCardSection,
  PaymentSection,
  CreditHeading,
  HorizontalLine,
  CreditCardImageSection,
  CreditCardItem,
  CardNumber,
  Text,
  CardHolderName,
  PaymentCard,
  PaymentHeading,
  InputElement,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')

  const onChangeCardNumber = event => setCardNumber(event.target.value)
  const onChangeCardHolderName = event => setCardHolderName(event.target.value)

  return (
    <BgContainer>
      <CreditCardSection>
        <CreditHeading>Credit Card</CreditHeading>
        <HorizontalLine />
        <CreditCardImageSection>
          <CreditCardItem data-testid="creditCard">
            <CardNumber>{cardNumber}</CardNumber>
            <Text>CARDHOLDER NAME</Text>
            <CardHolderName>{cardHolderName}</CardHolderName>
          </CreditCardItem>
        </CreditCardImageSection>
      </CreditCardSection>
      <PaymentSection>
        <PaymentCard>
          <PaymentHeading>Payment Method</PaymentHeading>
          <InputElement
            type="text"
            placeholder="Card Number"
            onChange={onChangeCardNumber}
            value={cardNumber}
          />
          <InputElement
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeCardHolderName}
            value={cardHolderName}
          />
        </PaymentCard>
      </PaymentSection>
    </BgContainer>
  )
}

export default CreditCard
