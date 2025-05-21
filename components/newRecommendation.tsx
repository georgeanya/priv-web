import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import assessment from "../public/assets/assessment.png";
import icon from "../public/assets/icon.svg";
import { Input } from "@heroui/input";
import { DatePicker } from "@heroui/date-picker";
import productt from "../public/assets/products.png";
import products from "../public/assets/productt.png";
import circle from "../public/assets/circle.svg";
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
import Link from "next/link";

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
  const { formData, updateFormData, updateProductData } = useFormData();
  const user = formData.user;
  const product = formData.product;

  const [discountPrice, setDiscountPrice] = useState(0);
  const [pageNumber, setPageNumber] = useState(4);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const syncFromLocalStorage = () => {
      const email = localStorage.getItem("email");
      const patient_id = localStorage.getItem("patient_id");
      const session_id = localStorage.getItem("session_id");

      if (email || patient_id || session_id) {
        updateFormData({
          ...(email && { email }),
          ...(patient_id && { patient_id }),
          ...(session_id && { session_id }),
        });
      }
    };

    // Sync on initial load
    syncFromLocalStorage();

    // Optional: Add event listener for changes from other tabs
    window.addEventListener("storage", syncFromLocalStorage);
    return () => window.removeEventListener("storage", syncFromLocalStorage);
  }, []);

  useEffect(() => {
    console.log("LocalStorage contents:", {
      email: localStorage.getItem("email"),
      patient_id: localStorage.getItem("patient_id"),
      session_id: localStorage.getItem("session_id"),
    });

    // Rest of your initialization code...
  }, []);

  useEffect(() => {
    if (pageNumber === 4) {
      console.log(product.price, "", product.delivery_fee, discountPrice);
    }
  }, [pageNumber]);

  useEffect(() => {
    const currentSessionId =
      user.session_id || localStorage.getItem("session_id");
    if (pageNumber === 1 && currentSessionId) {
      getRecommendation();
    }
  }, [pageNumber, user.session_id]);

  useEffect(() => {
    if (pageNumber === 1) {
      // Reset progress when on page 1
      setProgress(0);

      // Animate progress bar
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 300);

      const timer = setTimeout(() => {
        nextPage();
        console.log(product);
      }, 7000);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [pageNumber]);

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

  const nigerianStates = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT - Abuja",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  const getRecommendation = () => {
    const currentSessionId =
      user.session_id || localStorage.getItem("session_id");

    axios
      .post(
        "https://priv-health-api-ceb2339d4498.herokuapp.com/v1/patient/intake/recommendaion",
        {
          session_id: currentSessionId,
        }
      )
      .then((res) => {
        if (res.data.message === "recommendation fetched successfully") {
          updateProductData({
            id: res.data.data.product._id,
            name: res.data.data.product.name,
            description: res.data.data.product.description,
            price: res.data.data.product.price,
            type: res.data.data.product.type,
            image_url: res.data.data.product.image_url,
          });
          localStorage.setItem("type", res.data.data.product.type);
        }
        if (res.data.message === "this patient is not eligible") {
          setPageNumber(10);
        }
      })
      .catch((error) => {
        console.error("API Error:", {
          message: error.message,
          response: error.response?.data,
          config: error.config,
        });
      });
  };

  const purchaseProduct = async () => {
    setIsLoading(true);

    if (!product?.id) {
      console.error("Missing product ID. Current product:", product);
      setIsLoading(false);
      return;
    }

    const currentPatientId =
      user.patient_id || localStorage.getItem("patient_id");
    const productIds = [product.id];

    try {
      console.log("Validated payload:", {
        product_ids: productIds,
        patient_id: currentPatientId,
      });

      const response = await axios.post(
        "https://priv-health-api-ceb2339d4498.herokuapp.com/v1/patient/purchase",
        { product_ids: productIds, patient_id: currentPatientId },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.message === "order created successfully") {
        const orderId = response.data.data.order_id;
        localStorage.setItem("order_id", orderId);
        updateFormData({ order_id: orderId });

        // Skip address page for Consultation products
        if (product.type === "consultation") {
          setPageNumber(4); // Go directly to payment
        } else {
          nextPage(); // Go to address page (page 3)
        }
      }
    } catch (error) {
      console.error("Purchase failed:", error);
      setPageNumber(11);
    } finally {
      setIsLoading(false);
    }
  };

  const addAddress = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
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
          updateProductData({ delivery_fee: res.data.data.delivery_fee });
          console.log("Delivery:", res.data.data.delivery_fee);
          nextPage();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const discountCode = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
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
        }
      })
      .catch((error) => {});
  };

  const initializePayment = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    setIsLoading(true);

    const orderId = user.order_id || localStorage.getItem("order_id");
    console.log("clicked");
    axios
      .post(
        "https://priv-health-api-ceb2339d4498.herokuapp.com/v1/patient/payment/initialize",
        {
          order_id: orderId,
          email: user.email,
          discount_code: user.discount_code,
        }
      )
      .then((res) => {
        if (res.data.message === "payment initialized successfully") {
          window.location.href = res.data.data.data.authorization_url;
        } else {
          throw new Error(res.data.message || "Payment initialization failed");
        }
      })
      .catch((error) => {
        setPageNumber(11);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="max-w-m mx-5 md:mx-auto mt-[32px] md:mt-[40px]">
      {pageNumber === 1 && (
        <div className="max-w-m mx-5 md:mx-auto mt-[172px] md:mt-[40px]">
          <p className="mt-[32px] md:mt-[208px] leading-8 text-center md:text-[28px] md:leading-[30px] mb-4 md:mb-9 text-[22px] font-bold text-[#5355AC]">
            We are creating your treatment option
          </p>
          <div className="w-full bg-[#E6E6E6] h-[6px] rounded-[5px]">
            <div
              className="bg-[#5355AC] h-[6px] rounded-[5px] transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
      {pageNumber === 2 && (
        <div className="pb-24">
          <p className="mt-[32px] md:mt-[40px] leading-7 text-center md:text-[28px] md:leading-[30px] mb-3 text-[24px] md:mb-[32px] font-bold text-[#5355AC]">
            Here&apos;s what we recommend
          </p>
          <div className="min-w-[310px] bg-white md:px-[24px] px-5 md:pb-8 py-[28px] shadow-lg md:pt-[30px] rounded-2xl">
            {product.image_url ? (
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-auto max-h-[200px] object-contain"
              />
            ) : (
              <img src={productt.src} alt="" className="" />
            )}
            <p className="text-[20px] leading-[25px] mt-5 md:mt-6 md:text-[24px] md:leading-[30px] font-medium">
              {product.name}
            </p>
            <div className="flex mt-3 mb-4">
              <img src={stars.src} alt="" className="" />
              {product.type === "Prescription" && (
                <div className="pl-5" id="prescription">
                  <p className="text-[#5355AC] bg-[#EDEFF7] rounded-[15px] px-3 py-1 text-xs md:text-sm leading-[17px]">
                    Prescription only
                  </p>
                </div>
              )}
            </div>
            <p className="text-[16px] leading-[20px] md:text-[18px] md:leading-[22.7px] font-medium">
              ₦{product.price?.toLocaleString() ?? "0"}
            </p>
            <p className="mb-[px] mt-3 text-[#61616B] text-sm leading-[18px] md:text-[16px] md:leading-[20px]">
              {product.description}
            </p>
          </div>
          <p className="px-10 mt-6 mb-10 text-center leading-[17px] text-[13px] md:leading-[20px]">
            Got a discount code? You can use it in the payment page
          </p>
          {isLoading ? (
            <CenterButton title="Continue" onClick={purchaseProduct} />
          ) : (
            <LoadingButton />
          )}
        </div>
      )}
      {pageNumber === 3 && product.type !== "consultation" && (
        <div>
          <p className="mt-[32px] md:mt-[40px] leading-7 text-center px-5 md:text-[28px] md:leading-[30px] mb-8 text-[24px] font-bold text-[#5355AC]">
            Where do you want it delivered?
          </p>

          <form onSubmit={addAddress}>
            <div className="mb-[15px]">
              <Input
                type="text"
                name="address"
                label="Street"
                variant="bordered"
                value={user.address}
                onChange={handleChange}
                size="md"
                classNames={{
                  label:
                    "text-[#61616B] group-data-[filled=true]:text-[#111111]",
                  input: "text-[#111111]",
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
                name="city"
                label="City"
                variant="bordered"
                value={user.city}
                onChange={handleChange}
                size="md"
                classNames={{
                  label:
                    "text-[#61616B] group-data-[filled=true]:text-[#111111]",
                  input: "text-[#111111]",
                  inputWrapper:
                    "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#5355AC]",
                }}
                placeholder=""
                required
              />
            </div>
            <div className="mb-[40px]">
              <Select
                label="State"
                name="state"
                variant="bordered"
                selectedKeys={user.state ? [user.state] : []}
                onChange={(e) => updateFormData({ state: e.target.value })}
                size="md"
                classNames={{
                  label:
                    "text-[#61616B] group-data-[filled=true]:text-[#111111] group-data-[filled=true]:hidden",
                  trigger:
                    "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#5355AC] h-[56px]",
                  value: "text-[#111111]",
                  popoverContent: "bg-white",
                }}
                required
              >
                {nigerianStates.map((state) => (
                  <SelectItem
                    key={state}
                    classNames={{
                      base: "data-[hover=true]:bg-[#EDEFF7]",
                      title: "text-[#111111]",
                    }}
                  >
                    {state}
                  </SelectItem>
                ))}
              </Select>
            </div>

            <CenterButton title="Continue" type="submit" />
          </form>
        </div>
      )}
      {pageNumber === 4 && (
        <div>
          <h1 className="mt-[32px] md:mt-[40px] leading-7  md:text-[28px] md:leading-[30px] mb-8 text-[24px] text-center font-bold text-[#5355AC]">
            Payment time!
          </h1>
          <div className="shadow-md rounded-2xl py-[24px] ">
            <div className="px-5 md:px-[30px] ">
              <div className="flex justify-between">
                <div className="flex">
                  {product.image_url ? (
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="md:w-[60px] w-[50px] h-[50px] md:h-[60px] object-cover mr-4 rounded-md"
                    />
                  ) : (
                    <img
                      src={products.src}
                      alt=""
                      className="md:w-[60px] mr-4"
                    />
                  )}
                  <div className="mt-2">
                    <p className="text-[16px] font-medium  leading-5 text-[#111111]">
                      {product.name}
                    </p>
                    <p
                      className="text-[16px] leading-5 text-[#111111] mt-[5px]"
                      id="unit"
                    >
                      {product.type === "Prescription"
                        ? "1 pack"
                        : product.type === "consultation"
                        ? "1 visit"
                        : product.type === "test"
                        ? "1 unit"
                        : "1 item"}
                    </p>
                  </div>
                </div>

                <p className="text-[16px]  leading-5 mt-[33px] text-[#111111]">
                  ₦{product.price?.toLocaleString() ?? "0"}
                </p>
              </div>
              <hr className="mt-[22px] mb-[22px] " />
              <form className="flex " onSubmit={discountCode}>
                <Input
                  label="Promo code"
                  type="text"
                  name="discount_code"
                  value={user.discount_code}
                  onChange={handleChange}
                  size="sm"
                  classNames={{
                    label:
                      "text-[#111111] group-data-[filled=true]:text-[#111111]",
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
                  ₦{product.price?.toLocaleString() ?? "0"}
                </p>
              </div>
              {product.type !== "consultation" && (
                <div
                  className="flex justify-between mt-[16px]"
                  id="consultatio"
                >
                  <p className="text-[16px]  leading-5 text-[#111111]">
                    Doctor consultation
                  </p>
                  <p className="text-[16px]  leading-5 text-[#5355AC]">FREE</p>
                </div>
              )}
              <div className="flex justify-between mt-[16px]">
                <p className="text-[16px]  leading-5 text-[#111111]">
                  Promo discount
                </p>
                <p className="text-[16px]  leading-5 text-[#111111]">
                  -₦{discountPrice.toLocaleString()}
                </p>
              </div>
              {product.type !== "consultation" && (
            <div className="flex justify-between mt-[16px]" id="delivery">
              <p className="text-[16px] leading-5 text-[#111111]">
                {product.type === "test" ? "Sample Pickup" : "Delivery fee"}
              </p>
              <p className="text-[16px] leading-5 text-[#111111]">
                ₦{product.delivery_fee?.toLocaleString() ?? "0"}
              </p>
            </div>
          )}

              <hr className="mt-[22px] mb-[22px] " />
              <div className="flex justify-between mt-1.5">
                <p className="text-[18px] font-medium leading-5 text-[#111111]">
                  Total
                </p>
                <p className="text-[18px] font-medium leading-5 text-[#111111]">
                  ₦
                  {product.type === "consultation"
                    ? (product.price - discountPrice).toLocaleString()
                    : (
                        product.price -
                        discountPrice +
                        (product.delivery_fee || 0)
                      ).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F5F5F5] px-5 py-[15px] mt-8 md:mt-10 mb-6 rounded-lg">
            <p className="text-[#61616B] text-[13px] leading-[18px]">
              After checkout you will have a consultation with our doctor for
              final approval. No need to sweat it. Most men are approved for
              treatment, but rest assured that vou will be refunded it vou
              aren&apos;t.
            </p>
          </div>
          <form onSubmit={initializePayment}>
            <div className="mb-16">
              {isLoading ? (
                <LoadingButton />
              ) : (
                <CenterButton title="Checkout" type="submit" />
              )}
            </div>
          </form>
        </div>
      )}
      {pageNumber === 10 && (
        <div id="page10">
          <div className="flex justify-center mt-24">
            <img src={circle.src} alt="" className="w-20" />
          </div>
          <p className="text-[22px] leading-[28px] text-[#5355AC] md:text-[28px] md:leading-[35px] font-medium mt-4 mb-3 md:mt-[24px] md:mb-4 text-center">
            No suitable treatment
          </p>
          <p className="text-[#111111] text-[16px] leading-[22px] md:text-[18px] md:leading-[24px] text-center mb-7 md:mb-8">
            The safety of our patients is our top priority. Unfortunately, our
            treatments are not suitable for you. We recommend you seek care from
            a physical hospital.
            <br />
            <br />
            If you&apos;d like to talk to our team about this, please email{" "}
            <span className="text-[#5355AC]">
              <Link href="mailto:hi@privhealth.co">hi@privhealth.co</Link>
            </span>
          </p>
          <CenterButton title="Go to homepage" href="/" />
        </div>
      )}
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
