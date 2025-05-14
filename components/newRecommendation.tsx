import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import assessment from "../public/assets/assessment.png";
import icon from "../public/assets/icon.svg";
import { Input } from "@heroui/input";
import { DatePicker } from "@heroui/date-picker";
import product from "../public/assets/products.png";
import products from "../public/assets/productt.png";
import circle from "../public/assets/circle.png";
import stars from "../public/assets/stars.svg";
import {
  DateValue,
  parseDate,
  getLocalTimeZone,
} from "@internationalized/date";
import { Select, SelectSection, SelectItem } from "@heroui/select";
import CenterButton from "./centerButton";
import LoadingButton from "./loadingButton";
import { useFormData } from "./FormDataContext";

const PrivWhiteButton = styled(Button)({
  background: "white !important",
  fontFamily: "Circular Std",
  color: "#5355AC",
  cursor: "pointer",
  padding: "12px 37px",
  margin: "0px 0px",
  width: "100%",
  border: "1px solid #C4CED4",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "9px 20px",
  },
});


const Form = () => {
  const { formData, updateFormData } = useFormData();
  const user = formData.user;

  const [discountPrice, setDiscountPrice] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const session_id = localStorage.getItem("session_id");
    const email = localStorage.getItem("email");
    const patient_id = localStorage.getItem("patient_id");
  
    const updates: any = {};
  
    if (session_id) updates.session_id = session_id;
    if (email) updates.email = email;
    if (patient_id) updates.patient_id = patient_id;
  
    if (Object.keys(updates).length > 0) {
      updateFormData(updates);
    }
    console.log(user)
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ [event.target.name]: event.target.value });
  };

  const nextPage = () => setPageNumber((prevPage) => prevPage + 1);
  const prevPage = () =>
    setPageNumber((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));

  const handleError = () => {
    setIsLoading(true);
    setPageNumber(1);
  };

  

  const purchaseProduct = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    // setIsLoading(true);
    axios
      .post(
        "https://priv-health-api-ceb2339d4498.herokuapp.com/v1/patient/purchase",
        {
          product_ids: user.product_ids,
          patient_id: user.patient_id,
        }
      )
      .then((res) => {
        if (res.data.message === "order created successfully") {
          updateFormData({ order_id: res.data.data.order_id });
        } else {
        }
      })
      .catch((error) => {});
  };

  const addAddress = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    // setIsLoading(true);
    axios
      .post(
        "https://priv-health-api-ceb2339d4498.herokuapp.com/v1/patient/purchase/add-address",
        {
          order_id: user.order_id,
          city: user.city,
          state: user.state,
          street: user.address,
          country: "Nigeria",
        }
      )
      .then((res) => {
        if (res.data.message === "address added successfully") {
          updateFormData({ order_id: res.data.data.order_id });
        } else {
        }
      })
      .catch((error) => {});
  };

  // const fetchPlanData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://priv-health-api-ceb2339d4498.herokuapp.com/v1/patient/payment/plans"
  //     );

  //     const plan = response.data.data.plans[0];

  //     setState({
  //       ...state,
  //       plan: {
  //         ...user,
  //         price: plan.price,
  //         _id: plan._id,
  //       },
  //     });
  //   } catch (error) {
  //     setPageNumber(9);
  //   }
  // };

  const discountCode = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    // setIsLoading(true);
    axios
      .post(
        "https://priv-health-api-ceb2339d4498.herokuapp.com/v1/patient/payment/discount",
        {
          discount_code: user.discount_code,
        }
      )
      .then((res) => {
        if (res.data.message === "discount code validated successfully") {
          setDiscountPrice(res.data.data.amount);
        } else {
        }
      })
      .catch((error) => {});
  };

  const initializePayment = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    setIsLoading(false);
    axios
      .post(
        "https://priv-health-api-ceb2339d4498.herokuapp.com/v1/patient/payment/initialize",
        {
          discount_code: user.discount_code,
          email: user.email,
          order_id: user.order_id,
        }
      )
      .then((res) => {
        if (res.data.message === "payment initialized successfully") {
          // Note the nested data.data structure
          // const link = document.createElement("a");
          // link.href = res.data.data.data.authorization_url;
          // link.target = "_blank";
          // link.rel = "noopener nosource";
          // document.body.appendChild(link);
          // link.click();
          // document.body.removeChild(link);
          window.location.href = res.data.data.data.authorization_url;
        } else {
          throw new Error(res.data.message || "Payment initialization failed");
        }
      })
      .catch((error) => {
        setPageNumber(9);
      })
      .finally(() => setIsLoading(false));
  };



  const getISODateString = (date: DateValue | null): string => {
    if (!date) return "";
    return date.toDate(getLocalTimeZone()).toISOString();
  };
  const progress = (pageNumber / 6) * 100;

  return (
    <div className="max-w-m mx-5 md:mx-auto mt-[32px] md:mt-[40px]">
            {pageNumber === 1 && (
        <div className="max-w-m mx-5 md:mx-auto mt-[32px] md:mt-[40px]">
          <p className="mt-[32px] md:mt-[208px] leading-8 text-center md:text-[28px] md:leading-[30px] mb-4 md:mb-9 text-[22px] font-bold text-[#5355AC]">
            We are creating your treatment option
          </p>
          <div className="w-full bg-[#E6E6E6] h-[6px] rounded-[5px]">
            <div className="bg-[#5355AC] h-[6px] rounded-[5px] transition-all duration-300 ease-in-out" />
          </div>
        </div>
      )}
      {pageNumber === 2 && (
        <div className="pb-24">
          <p className="mt-[32px] md:mt-[40px] leading-7 text-center md:text-[28px] md:leading-[30px] mb-3 text-[24px] font-bold text-[#5355AC]">
            Your treatment option
          </p>
          <div className=" min-w-[310px]  bg-white md:px-[24px] px-5 md:pb-8 py-[28px] shadow-lg md:pt-[30px] rounded-2xl">
            <img src={product.src} alt="" className="" />
            <p className="text-[20px] leading-[25px] mt-5 md:mt-6 md:text-[24px] md:leading-[30px] font-medium">
              Testo+ pill
            </p>
            <div className="flex mt-3 mb-4">
              <img src={stars.src} alt="" className="" />
              <div className="pl-5">
                <p className="text-[#5355AC] bg-[#EDEFF7] rounded-[15px] px-3 py-1 text-xs md:text-sm leading-[17px]">
                  Prescription only
                </p>
              </div>
            </div>
            <p className="text-[16px] leading-[20px] md:text-[18px] md:leading-[22.7px] font-medium">
              ₦50,000
            </p>
            <p className="mb-[px] mt-3 text-[#61616B] text-sm leading-[18px] md:text-[16px] md:leading-[20px]">
              Promotes the natural production of testosterone in the body
            </p>
          </div>
          <p className=" px-10 mt-6 mb-10 text-center leading-[17px] text-[13px] md:leading-[20px]">
            Got a discount code? You can use it in the payment page
          </p>
          <CenterButton title="Continue" href="/start" />
        </div>
      )}
      {pageNumber === 3 && (
        <div>
          <p className="mt-[32px] md:mt-[40px] leading-7 text-center px-5 md:text-[28px] md:leading-[30px] mb-3 mb-8 text-[24px] font-bold text-[#5355AC]">
            Where do you want it delivered?
          </p>
          <div className="mb-[15px]">
            <Input
              type="text"
              name="first_name"
              label="Country"
              variant="bordered"
              value={user.first_name}
              onChange={handleChange}
              size="md"
              classNames={{
                label: "text-[#61616B] group-data-[filled=true]:text-[#111111]",
                input: "text-[#5355AC]",
                inputWrapper:
                  "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#5355AC]",
              }}
              placeholder=""
              required
            />
          </div>

          <div className="mb-[15px]">
            <Input
              type="text"
              name="first_name"
              label="Street Address"
              variant="bordered"
              value={user.first_name}
              onChange={handleChange}
              size="md"
              classNames={{
                label: "text-[#61616B] group-data-[filled=true]:text-[#111111]",
                input: "text-[#5355AC]",
                inputWrapper:
                  "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#5355AC]",
              }}
              placeholder=""
              required
            />
          </div>

          <div className="mb-[15px]">
            <Input
              type="text"
              name="first_name"
              label="City"
              variant="bordered"
              value={user.first_name}
              onChange={handleChange}
              size="md"
              classNames={{
                label: "text-[#61616B] group-data-[filled=true]:text-[#111111]",
                input: "text-[#5355AC]",
                inputWrapper:
                  "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#5355AC]",
              }}
              placeholder=""
              required
            />
          </div>

          <div className="mb-[40px]">
            <Input
              type="text"
              name="last_name"
              label="State"
              variant="bordered"
              value={user.last_name}
              onChange={handleChange}
              classNames={{
                label: "text-[#61616B] group-data-[filled=true]:text-[#111111]",
                input: "text-[#5355AC]",
                inputWrapper:
                  "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#5355AC]",
              }}
              placeholder=""
              required
            />
          </div>
          <CenterButton title="Continue" href="/start" />
        </div>
      )}
      {pageNumber === 9 && (
        <div>
          <h1 className="mt-[32px] md:mt-[40px] leading-7  md:text-[28px] md:leading-[30px] mb-8 text-1lg text-center font-bold text-[#5355AC]">
            Payment time!
          </h1>
          <div className="border rounded-2xl py-[24px] ">
            <div className="px-5 md:px-[30px] ">
              <div className="flex justify-between">
                <div className="flex">
                  <img src={products.src} alt="" className="md:w-[60px] mr-4" />
                  <div className="mt-2">
                    <p className="text-[16px] font-medium  leading-5 text-[#111111]">
                      Testo+ pill
                    </p>
                    <p className="text-[16px]  leading-5 text-[#111111]">
                      1 pack
                    </p>
                  </div>
                </div>

                <p className="text-[16px]  leading-5 mt-[33px] text-[#111111]">
                  ₦{user.price.toLocaleString()}
                </p>
              </div>
              <hr className="mt-[22px] mb-[22px] " />
              <form className="flex " onSubmit={discountCode}>
                {/* <input
                  type="text"
                  name="discount_code"
                  value={user.discount_code}
                  onChange={handleChange}
                  className="border h-[44px] md:h-[50px] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                  placeholder="Promo code"
                /> */}
                <Input
                  label="Promo code"
                  type="text"
                  name="discount_code"
                  value={user.discount_code}
                  onChange={handleChange}
                  size="sm"
                  classNames={{
                    label:
                      "text-[#476D85] group-data-[filled=true]:text-[#476D85]",
                    input: "text-[#111111]",
                    inputWrapper:
                      "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#111111]",
                  }}
                  placeholder=""
                  variant="bordered"
                  required
                />
                <div className="w-[120px] ml-4">
                  <PrivWhiteButton type="submit">Apply</PrivWhiteButton>
                </div>
              </form>
              <hr className="mt-[24px] mb-[24px]" />
              <div className="flex justify-between">
                <p className="text-[16px]  leading-5 text-[#111111]">
                  Subtotal
                </p>
                <p className="text-[16px]  leading-5 text-[#111111]">
                  ₦{user.price.toLocaleString()}
                </p>
              </div>
              <div className="flex justify-between mt-[16px]">
                <p className="text-[16px]  leading-5 text-[#111111]">
                  Doctor consultation
                </p>
                <p className="text-[16px]  leading-5 text-[#5355AC]">FREE</p>
              </div>
              <div className="flex justify-between mt-[16px]">
                <p className="text-[16px]  leading-5 text-[#111111]">
                  Promo discount
                </p>
                <p className="text-[16px]  leading-5 text-[#111111]">
                  -₦{discountPrice.toLocaleString()}
                </p>
              </div>
              <div className="flex justify-between mt-[16px]">
                <p className="text-[16px]  leading-5 text-[#111111]">
                  Delivery fee
                </p>
                <p className="text-[16px]  leading-5 text-[#111111]">
                  ₦{discountPrice.toLocaleString()}
                </p>
              </div>
              <hr className="mt-[22px] mb-[22px] " />
              <div className="flex justify-between mt-1.5">
                <p className="text-[18px] font-medium leading-5 text-[#111111]">
                  Total
                </p>
                <p className="text-[18px] font-medium leading-5 text-[#111111]">
                  ₦{(user.price - discountPrice).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#EEF3F6] px-5 py-[15px] mt-8 md:mt-10 mb-6 rounded-lg">
            <p className="text-[#61616B] text-[13px] leading-[18px]">
              After checkout you will have a consultation with our doctor for
              final approval. No need to sweat it. Most men are approved for
              treatment, but rest assured that vou will be refunded it vou
              aren&lsquo;t.
            </p>
          </div>
          <form onSubmit={initializePayment}>
            <div className="mb-16">
              {isLoading ? (
                <CenterButton title="Checkout" type="submit" />
              ) : (
                <LoadingButton />
              )}
            </div>
          </form>
        </div>
      )}
      {pageNumber === 9 && <div></div>}
      {pageNumber === 9 && <div></div>}
      {pageNumber === 9 && <div></div>}
      {pageNumber === 9 && <div></div>}
      {pageNumber === 11 && (
        <div id="page8">
          <div className="flex justify-center mt-24">
            <img src={circle.src} alt="" className="w-20" />
          </div>
          <p className="text-[22px] leading-[28px] text-[#5355AC] md:text-[28px] md:leading-[35px] font-medium mt-4 mb-3 md:mt-[24px] md:mb-4 text-center">
            An error occurred
          </p>
          <p className="text-[#111111] text-[16px] leading-[22px] md:text-[18px] md:leading-[24px] text-center mb-7 md:mb-8">
            Please make sure you entered a valid details and try again
          </p>
          <CenterButton title="Try Again" onClick={handleError} />
        </div>
      )}
    </div>
  );
};

export default Form;
