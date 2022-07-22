import { AddressInfo } from './types'

export const convertPostalCodeFormat = (postalCode: string): string => {
  if (!postalCode) {
    return ''
  }
  return `〒${postalCode.substring(0, 3)}-${postalCode.substring(3)}`
}

export const convertAddressFormat = ({ addrCity, addrLine1, addrLine2, addrState }: AddressInfo): string => {
  if (!addrState || !addrCity || !addrLine1) {
    return ''
  }
  return addrState + addrCity + addrLine1 + addrLine2
}

export const convertPhoneNumberFormat = ({ phoneNumber1, phoneNumber2, phoneNumber3 }: AddressInfo): string => {
  if (!phoneNumber1 || !phoneNumber2 || !phoneNumber3) {
    return ''
  }
  return `${phoneNumber1}-${phoneNumber2}-${phoneNumber3}`
}
