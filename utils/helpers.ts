export const checkEmailValidity = (email: string) => {
  const result = email.match(/^[\S^@]+@+[\S^@]+\.+[\S^@]+$/);
  return result ? true : false;
}