export function truncateAddress(address: string) {
  if (!address) {
    return "";
  }

  return address.slice(0, 4) + "..." + address.slice(-4);
}

export function truncateAddressM(address: string) {
  if (!address) {
    return "";
  }

  return address.slice(0, 6);
}

export function truncateAddressL(address: string) {
  if (!address) {
    return "";
  }

  return address.slice(0, 8) + "..." + address.slice(-8);
}
