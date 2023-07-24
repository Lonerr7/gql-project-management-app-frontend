export const shortenString = (string) => {
  if (string.length >= 30) {
    return `${string.slice(0, 30)}...`;
  }

  return string;
};

// export const shortenString = (string) => string.length > 30 ? `${string.slice(0, 30)}...` : string
