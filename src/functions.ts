export const validateEmail = (email: string): boolean => {
     const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
     return emailRegex.test(email)
}

export const generateOTP = (): string => {
     return Math.floor(100000 + Math.random() * 900000).toString()
}

export const validateIndianPhoneNumber = (phoneNumber: string): boolean => {
     const phoneRegex: RegExp = /^[6-9]\d{9}$/
     return phoneRegex.test(phoneNumber)
};

export const checkPasswordStrength = (password: string): boolean => {
     const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
     return passwordRegex.test(password)
}