import * as Yup from 'yup';

export interface FormValues {
  fullName: string;
  mobileNumber: string;
  location: string;
  serviceRequired: string;
  additionalDetails: string;
}

export const initialValues: FormValues = {
  fullName: '',
  mobileNumber: '',
  location: '',
  serviceRequired: '',
  additionalDetails: '',
};

export const validationSchema = Yup.object({
  fullName: Yup.string().min(2).required('Full Name is required'),
  mobileNumber: Yup.string().min(8).required('Mobile Number is required'),
  location: Yup.string().min(2).required('Location is required'),
  serviceRequired: Yup.string().required('Service is required'),
  additionalDetails: Yup.string().required('Additional Details are required'),
});

export const serviceOptions = [
  { value: '', label: 'Select service type' },
  { value: 'delivery-truck', label: 'Delivery Truck Rental' },
  { value: 'freight-truck', label: 'Freight Truck Rental' },
  { value: 'medium-truck', label: 'Medium Truck Rental' },
  { value: 'commercial-truck', label: 'Commercial Truck Rental' },
  { value: 'cargo-transportation', label: 'Cargo Transportation' },
  { value: 'intercity-freight', label: 'Intercity Freight' },
  { value: 'express-delivery', label: 'Express Delivery' },
  { value: 'logistics-support', label: 'Logistics Support' },
  { value: 'other', label: 'Other' },
];
