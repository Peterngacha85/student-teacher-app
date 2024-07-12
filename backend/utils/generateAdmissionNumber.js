// Function to generate random admission number
const generateAdmissionNumber = () => {
    const prefix = 'KCA/'; // Example prefix for student admission numbers
    const randomDigits = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit random number
    const admissionNumber = `${prefix}${randomDigits}`;
    return admissionNumber;
  };
  
  module.exports = generateAdmissionNumber;
  