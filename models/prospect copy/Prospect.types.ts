import { DefaultResponse } from '@/lib/utils/api-helpers/APIResponse.types';
import { PaginatedResults } from '@/lib/utils/api-helpers/getPaginatedResults';

import { ICoach } from '../coach/Coach.types';

export const ClientStatus = {
  PROSPECTING: 'Prospecting',
  VERIFICATION_LINK_SENT: 'Verification Link Sent',
  FORM_LINK_SENT: 'Form Link Sent',
  PAYMENT_LINK_SENT: 'Payment Link Sent',
  MEDICAL_HISTORY_FORM_COMPLETED: 'Medical History Form Completed',
  LIABILITY_FORM_COMPLETED: 'Liability Form Completed',
  FORM_COMPLETED: 'Form Completed',
  COMPLETED: 'Completed',
};

export const ClientOrderStatus = {
  AWAITING_PAYMENT: 'Awaiting Payment',
  PAID_AWAITING_VERIFICATION: 'Paid/Awaiting Verification',
};

export interface AllProspectsResponse extends DefaultResponse {
  results: PaginatedResults<PartialIProspect[] | []>;
}

export interface PartialIProspect extends Partial<IProspect> {}

export interface IProspect {
  _id: string;
  status: string;
  verified: boolean;
  sentTheFormLink: boolean;
  receivedFormLink: boolean;
  receivedOrderLink: boolean;
  approved: boolean;
  orders: any[];
  fullName: string;
  phone: string;
  email: string;
  referredBy: string;
  headCoach: Partial<ICoach> | null;
  dateInvited: string;
  children: any[];
  formVerificationCode: string;
  DOB: string;
  address: string;
  firstName: string;
  home_phone: string;
  lastName: string;
  mobile_phone: string;
  occupation: string;
  postCode: string;
  sex: string;
  spouse_DOB: null;
  spouse_email: string;
  spouse_fullName: string;
  spouse_occupation: string;
  spouse_phone: string;
  suburb: string;
  work_phone: string;
  medicalHistory: Partial<MedicalHistory> | null;
  participantAgreement: Partial<ParticipantAgreement> | null;
  liabilityWaiver: Partial<LiabilityWaiver> | null;
}

export interface EmojiObject {
  emoji: string;
  unified: string;
}

export interface LiabilityWaiver {
  acknowledgedLiabilityWaiver: boolean;
  acknowledgedUsePhotoImage: boolean;
  dateSigned: string;
}

export interface MedicalHistory {
  physicalInjuries: string;
  jointConditions: string;
  medicalConditions: string;
  havehadType1Diabetes: boolean;
  havehadPregnantOrNursing: boolean;
  havehadLiverOrKidney: boolean;
  havehadMaleOver130kg: boolean;
  havehadFemaleOver100kg: boolean;
  havehadFamUnder60NotUsedToActivity: boolean;
  havehadFamMaleFemaleNotUsedToActivity: boolean;
  havehadAsthma: boolean;
  havehadHeartCondition: boolean;
  havehadHighBloodPressure: boolean;
  havehadStroke: boolean;
  havehadPalpitationOrChest: boolean;
  havehadHernia: boolean;
  havehadType2Diabetes: boolean;
  havehadRaisedCholesterol: boolean;
  havehadEpilepsy: boolean;
  havehadOnPrescribeMeds: boolean;
  provideDetails: string;
  initial: string;
  GP: string;
  GPAddress: string;
  likeToAchieve: Partial<LikeToAchieve> | null;
  recogniseWLCW: boolean;
  acknowledged: boolean;
}

export interface LikeToAchieve {
  weightLoss: boolean;
  strength: boolean;
  toning: boolean;
  increasedFitness: boolean;
  increasedEnergy: boolean;
  increasedLeanMuscle: boolean;
  reducedStress: boolean;
  flexibility: boolean;
}

export interface ParticipantAgreement {
  acknowledgedParticipantAgreement: boolean;
  dateSigned: string;
}
