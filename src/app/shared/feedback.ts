export class Feedback {
  firstname: string;
  lastname: string;
  telnum: string;
  email: string;
  agree: boolean;
  contracttype: string;
  message: string;
}


export const ContactType: string[] = ['None', 'Tel', 'Email'];