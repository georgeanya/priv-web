import { createContext, useState, useContext, ReactNode } from "react";

interface FormData {
  user: {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    patient_id: string;
    session_id: string;
    product_ids: string[];
    order_id: string;
    source: string;
    condition: string;
    dob: string;
    gender: string;
    discount_code: string;
    state: string;
    city: string;
    address: string;
  };
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    delivery_fee: number;
    image_url: string;
    type: string;
  };
}

interface FormDataContextProps {
  formData: FormData;
  updateFormData: (newUserData: Partial<FormData["user"]>) => void;
  updateProductData: (newProductData: Partial<FormData["product"]>) => void;
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
      product_ids: [],
      order_id: "",
      dob: "",
      gender: "male",
      source: "",
      condition: "",
      discount_code: "",
      state: "",
      city: "",
      address: "",
    },
    product: {
      id: "",
      name: "",
      description: "",
      price: 0,
      delivery_fee: 0,
      image_url: "",
      type: "",
    },
  });

  const updateFormData = (newUserData: Partial<FormData["user"]>) => {
    setFormData((prevData) => ({
      ...prevData,
      user: {
        ...prevData.user,
        ...newUserData,
      },
    }));
  };

  const updateProductData = (newProductData: Partial<FormData["product"]>) => {
    setFormData((prevData) => ({
      ...prevData,
      product: {
        ...prevData.product,
        ...newProductData,
      },
    }));
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData, updateProductData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () =>
  useContext(FormDataContext) as FormDataContextProps;
