export const sanitizePhone = (phone: string) => {
  return phone.replace(/[()-]/g, "");
};
