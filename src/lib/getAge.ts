import type { Roster } from "@/types/roster";

export default function getAge(DOB: string) {
  const today = new Date();
  const birthDate = new Date(DOB);

  let age = today.getFullYear() - birthDate.getFullYear();

  const birthdayThisYear = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  return birthdayThisYear > today ? age - 1 : age;
}
