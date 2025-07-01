import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  tabs: [String],
  faqGroups: [
    {
      tab: String,
      faqTitle: String
    }
  ],
  personImage: String,
  businessLogo: String,
  personName: String,
  businessName: String,
  businessCategory: String,
  category: String,
  companyName: String,
  phoneNumber: String,
  emailId: String,
  website: String,
  role: String,
  // Removed inductions, businessGiveninRupees, businessGiven, referrals, visitors (since not in DB)
  aboutHeading: String, // ✅ fixed from "aboutheading"
  aboutPara: String,
  businessImg: String, // ✅ added, missing before
  statistics: [
    {
      number: String,
      text: String
    }
  ],
  services: [
    {
      icon: String,
      name: String,
      description: String
    }
  ],
  photos: [String],
  isActive: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model('Member', memberSchema, 'members');
