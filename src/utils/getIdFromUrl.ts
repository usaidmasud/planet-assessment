export function getIdFromUrl(url: string) {
  if (url === null || url === undefined) {
    return "-";
  }
  // Using regular expression to match the numeric part at the end of the URL
  const match = url.match(/\/(\d+)\/$/);

  // Check if there's a match and return the captured numeric part
  return match ? parseInt(match[1], 10) : null;
}
