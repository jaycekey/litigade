import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { martel700, monserrat400, openSans700 } from "@/styles/fonts";
import Button from "./Button";

interface FormInput {
  clientName: string;
  email: string;
  department: string;
  time: string;
}

const schema = yup.object().shape({
  clientName: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  department: yup.string().required("Department is required"),
  time: yup.string().required("Date and time are required"),
});

export default function AppointmentForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      setSubmitting(true);

      const response = await fetch("http://localhost:8080/api/v1/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Formulario enviado con éxito");
      } else {
        alert("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error en la solicitud POST", error);
    } finally {
      setSubmitting(false);
    }
  };

  const formFieldStyles = "flex flex-col ";
  const labelStyles = `${openSans700.className} text-sm text-[#252B42] text-left`;
  const inputStyles = `${monserrat400.className} placeholder:text-[#737373] text-[#737373] bg-[#F9F9F9] text-sm h-12 my-3 border border-[#BDBDBD] rounded-md text-left p-2 pl-5 tracking-wide`;

  return (
    <div className="p-8 mx-8 lg:mx-0 rounded-xl bg-white lg:w-2/5 xl:w-1/2 2xl:w-1/3">
      <p className={`${martel700.className} text-2xl pb-10`}>
        Book Appointment
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className={formFieldStyles}>
          <label className={labelStyles} htmlFor="clientName">
            Name*
          </label>
          <Controller
            name="clientName"
            control={control}
            render={({ field }) => (
              <input
                placeholder="Full Name"
                className={inputStyles}
                {...field}
              />
            )}
          />
          <p>{errors.clientName?.message}</p>
        </div>

        <div className={formFieldStyles}>
          <label className={labelStyles} htmlFor="email">
            Email:
          </label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder="example@gmail.com"
                className={inputStyles}
              />
            )}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div className={formFieldStyles}>
          <label className={labelStyles} htmlFor="department">
            Department:
          </label>
          <Controller
            name="department"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Please select"
                className={inputStyles}
              />
            )}
          />
          <p>{errors.department?.message}</p>
        </div>

        <div className={formFieldStyles}>
          <label className={labelStyles} htmlFor="time">
            Time:
          </label>
          <Controller
            name="time"
            control={control}
            render={({ field }) => (
              <input
                type="datetime-local"
                {...field}
                className={`${inputStyles} black-icon`}
              />
            )}
          />
          <p>{errors.time?.message}</p>
        </div>
        <Button type="submit" text="Book Appointment" />
      </form>
    </div>
  );
}
