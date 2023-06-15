declare module "react-phone-number-input" {
  import { InputHTMLAttributes } from "react";

  export interface PhoneInputProps
    extends InputHTMLAttributes<HTMLInputElement> {
    value?: string;
    onChange?: (value: string) => void;
    country?: string;
    international?: boolean;
    internationalIcon?: React.ReactNode;
    displayInitialValueAsLocalNumber?: boolean;
    defaultCountry?: string;
    countryCallingCodeEditable: boolean;
    countries?: string[];
    countrySelectComponent?: React.ReactNode;
    disabled?: boolean;
    inputComponent?: React.ReactNode;
  }

  const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps>;

  export default PhoneInput;
}
