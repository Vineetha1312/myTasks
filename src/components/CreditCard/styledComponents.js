import styled from 'styled-components'

export const BgContainer = styled.div`
    display:flex;
    flex-direction:row
    height:100vh;
`

export const CreditCardSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #3b4b69;
  width: 50vw;
`
export const PaymentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
`

export const CreditHeading = styled.h1`
  color: #ffffff;
  font-size: 25px;
  font-family: 'Roboto';
  text-align: center;
  margin-bottom: 0px;
`

export const HorizontalLine = styled.hr`
  border: 1px solid #ffd773;
  width: 100px;
`

export const CreditCardImageSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`

export const CreditCardItem = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 250px;
  border-radius: 10px;
`
export const CardNumber = styled.p`
  color: #ffffff;
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: bold;
`

export const Text = styled.p`
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
`

export const CardHolderName = styled.p`
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const PaymentCard = styled.div`
  background-color: transparent;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PaymentHeading = styled.h1`
  color: #475569;
  font-size: 20px;
  font-family: 'Roboto';
  margin-bottom: 20px;
`
export const InputElement = styled.input`
  color: #475569;
  font-size: 12px;
  font-family: 'Roboto';
  height: 30px;
  width: 250px;
  border-radius: 5px;
  border: 1px solid #d3d9e0;
  margin: 10px;
  padding: 10px;
`
