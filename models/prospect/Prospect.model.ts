import mongoose from 'mongoose';
import { ClientStatus, IProspect } from './Prospect.types';
const Schema = mongoose.Schema;

const ProspectSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dateInvited: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: ClientStatus.PROSPECTING,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  sentTheFormLink: {
    type: Boolean,
    default: false,
  },
  receivedFormLink: {
    type: Boolean,
    default: false,
  },
  receivedOrderLink: {
    type: Boolean,
    default: false,
  },
  headCoach: {
    type: Schema.Types.ObjectId,
    ref: 'Coach',
  },
  approved: {
    type: Boolean,
    default: false,
  },
  firstName: String,
  lastName: String,
  sex: String,
  DOB: String,
  address: String,
  suburb: String,
  postCode: String,
  mobile_phone: String,
  home_phone: String,
  work_phone: String,
  occupation: String,
  referredBy: {
    type: String,
    required: true,
  },
  spouse_fullName: String,
  spouse_phone: String,
  spouse_email: String,
  spouse_occupation: String,
  spouse_DOB: String,

  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],

  theBases: {
    pifProspected: Boolean,
    likeWLCWFBPage: Boolean,
    setUpResearchGroup: Boolean,
    phoneContact: Boolean,
    prVideo: Boolean,
    attendPIFTalk: Boolean,
    attend8PointTalk: Boolean,
    personalityPlusTest: Boolean,
    buddyOnSamePage: Boolean,

    connectApp: Boolean,
    walkNTalkOptimalHealthTalk: Boolean,
    shop1st2nd3rd: Boolean,
    fillOutCreditRequestForm: Boolean,
    week10Photos: Boolean,
    photosOnFB: Boolean,
    ultimateGoalBMILessThan25: Boolean,
    skinAnalyzer: Boolean,
    eSpring: Boolean,

    promoteEncourager: Boolean,
    healthEFamily: Boolean,
    tellYourStory: Boolean,
    hostPIFTalk: Boolean,
    seenThePlan: Boolean,
    cashBackBDS: Boolean,
    mediaAppStarterPack: Boolean,
    weekendSeminar: Boolean,

    audiosPerDay1To3: Boolean,
    prinsiples3: Boolean,
    fishbowlMoments6: Boolean,
    read12PagesPerDay: Boolean,
    pifs25: Boolean,
    attendWeeklyFunctions50: Boolean,
    healthE100Percent: Boolean,
  },

  medicalHistory: {
    type: Object,
    physicalInjuries: String,
    jointConditions: String,
    medicalConditions: String,
    havehadType1Diabetes: Boolean,
    havehadPregnantOrNursing: Boolean,
    havehadLiverOrKidney: Boolean,
    havehadMaleOver130kg: Boolean,
    havehadFemaleOver100kg: Boolean,
    havehadFamUnder60NotUsedToActivity: Boolean,
    havehadFamMaleFemaleNotUsedToActivity: Boolean,
    havehadAsthma: Boolean,
    havehadHeartCondition: Boolean,
    havehadHighBloodPressure: Boolean,
    havehadStroke: Boolean,
    havehadPalpitationOrChest: Boolean,
    havehadHernia: Boolean,
    havehadType2Diabetes: Boolean,
    havehadRaisedCholesterol: Boolean,
    havehadEpilepsy: Boolean,
    havehadOnPrescribeMeds: Boolean,

    provideDetails: String,

    initial: String,
    GP: String,
    GPAddress: String,

    likeToAchieve: {
      weightLoss: Boolean,
      strength: Boolean,
      toning: Boolean,
      increasedFitness: Boolean,
      increasedEnergy: Boolean,
      increasedLeanMuscle: Boolean,
      reducedStress: Boolean,
      flexibility: Boolean,
    },
    recogniseWLCW: {
      type: Boolean,
      default: false,
    },
    acknowledged: {
      type: Boolean,
      default: false,
    },
  },

  liabilityWaiver: {
    type: Object,
    acknowledgedLiabilityWaiver: Boolean,
    acknowledgedUsePhotoImage: Boolean,
    dateSigned: Date,
  },

  participantAgreement: {
    type: Object,
    acknowledgedParticipantAgreement: Boolean,
    dateSigned: Date,
  },

  partnerParticipantAgreement: {
    type: Object,
    acknowledgedParticipantAgreement: Boolean,
    dateSigned: Date,
  },

  formVerificationCode: String,

  partnerFormVerificationCode: String,
  partnerMedicalHistory: {
    type: Object,
    physicalInjuries: String,
    jointConditions: String,
    medicalConditions: String,
    havehadType1Diabetes: Boolean,
    havehadPregnantOrNursing: Boolean,
    havehadLiverOrKidney: Boolean,
    havehadMaleOver130kg: Boolean,
    havehadFemaleOver100kg: Boolean,
    havehadFamUnder60NotUsedToActivity: Boolean,
    havehadFamMaleFemaleNotUsedToActivity: Boolean,
    havehadAsthma: Boolean,
    havehadHeartCondition: Boolean,
    havehadHighBloodPressure: Boolean,
    havehadStroke: Boolean,
    havehadPalpitationOrChest: Boolean,
    havehadHernia: Boolean,
    havehadType2Diabetes: Boolean,
    havehadRaisedCholesterol: Boolean,
    havehadEpilepsy: Boolean,
    havehadOnPrescribeMeds: Boolean,

    provideDetails: String,

    initial: String,
    GP: String,
    GPAddress: String,

    likeToAchieve: {
      weightLoss: Boolean,
      strength: Boolean,
      toning: Boolean,
      increasedFitness: Boolean,
      increasedEnergy: Boolean,
      increasedLeanMuscle: Boolean,
      reducedStress: Boolean,
      flexibility: Boolean,
    },
    recogniseWLCW: {
      type: Boolean,
      default: false,
    },
    acknowledged: {
      type: Boolean,
      default: false,
    },
  },

  partnerLiabilityWaiver: {
    type: Object,
    acknowledgedLiabilityWaiver: Boolean,
    acknowledgedUsePhotoImage: Boolean,
    dateSigned: Date,
  },

  children: [
    {
      id: String,
      is_a_minor: { type: Boolean, default: true },
      fullName: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      dateInvited: {
        type: Date,
        default: Date.now,
      },
      status: {
        type: String,
        default: 'Child',
      },
      verified: {
        type: Boolean,
        default: false,
      },
      formVerificationCode: String,

      liabilityWaiver: {
        type: Object,
        acknowledgedLiabilityWaiver: Boolean,
        dateSigned: Date,
      },

      parentConsent: {
        type: Object,
        acknowledgedParentConsent: Boolean,
        dateSigned: Date,
      },

      medicalHistory: {
        type: Object,
        physicalInjuries: String,
        jointConditions: String,
        medicalConditions: String,
        havehadType1Diabetes: Boolean,
        havehadPregnantOrNursing: Boolean,
        havehadLiverOrKidney: Boolean,
        havehadMaleOver130kg: Boolean,
        havehadFemaleOver100kg: Boolean,
        havehadFamUnder60NotUsedToActivity: Boolean,
        havehadFamMaleFemaleNotUsedToActivity: Boolean,
        havehadAsthma: Boolean,
        havehadHeartCondition: Boolean,
        havehadHighBloodPressure: Boolean,
        havehadStroke: Boolean,
        havehadPalpitationOrChest: Boolean,
        havehadHernia: Boolean,
        havehadType2Diabetes: Boolean,
        havehadRaisedCholesterol: Boolean,
        havehadEpilepsy: Boolean,
        havehadOnPrescribeMeds: Boolean,

        provideDetails: String,

        initial: String,
        GP: String,
        GPAddress: String,

        likeToAchieve: {
          weightLoss: Boolean,
          strength: Boolean,
          toning: Boolean,
          increasedFitness: Boolean,
          increasedEnergy: Boolean,
          increasedLeanMuscle: Boolean,
          reducedStress: Boolean,
          flexibility: Boolean,
        },
        recogniseWLCW: {
          type: Boolean,
          default: false,
        },
        acknowledged: {
          type: Boolean,
          default: false,
        },
      },
    },
  ],
});

const ProspectModel =
  mongoose.models.Prospect ||
  mongoose.model<IProspect>('Prospect', ProspectSchema);
export default ProspectModel;
