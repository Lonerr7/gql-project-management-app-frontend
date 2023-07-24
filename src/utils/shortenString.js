export const shortenString = (string, maxLength) => {
  if (string.length >= maxLength) {
    return `${string.slice(0, maxLength)}...`;
  }

  return string;
};

// export const shortenString = (string) => string.length > 30 ? `${string.slice(0, 30)}...` : string
