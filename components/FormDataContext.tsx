import { createContext, useState, useContext, ReactNode } from "react";

interface FormData {
  user: {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    patient_id: string;
    session_id: string;
    product_ids: string;
    order_id: string;
    source: string;
    condition: string;
    dob: string;
    gender: string;
    discount_code: string;
    state: string;
    city: string;
    price: number;
    address: string;
  };
}

interface FormDataContextProps {
  formData: FormData;
  updateFormData: (newUserData: Partial<FormData["user"]>) => void;
}

const FormDataContext = createContext<FormDataContextProps | null>(null);

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({
    user: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      patient_id: "",
      session_id: "",
      product_ids: "",
      order_id: "",
      dob: "",
      gender: "male",
      source: "",
      condition: "",
      discount_code: "",
      state: "",
      price: 0,
      city: "",
      address: "",
    },
  });

  const updateFormData = (newUserData: Partial<FormData["user"]>) => {
    setFormData((prevData) => ({
      user: {
        ...prevData.user,
        ...newUserData,
      },
    }));
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () =>
  useContext(FormDataContext) as FormDataContextProps;
