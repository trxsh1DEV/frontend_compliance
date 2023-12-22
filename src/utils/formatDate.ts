export const formatDateString = (
  dateString: string | undefined
): string | undefined => {
  if (!dateString) return;
  const dateObject = new Date(dateString);

  const formattedDate = dateObject.toLocaleDateString();
  return formattedDate;
};
