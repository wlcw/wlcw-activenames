export function hideEmail(email: string) {
  return email.replace(
    /(.{2})(.*)(?=@)/,
    function (gp1: string, gp2: string, gp3: string) {
      for (let i = 0; i < gp3.length; i++) {
        gp2 += "*";
      }
      return gp2;
    }
  );
}
