/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import { Button, InputAdornment, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import _DetailPaymentDonationFormButtonGroup from "./_DetailPaymentDonationFormButtonGroup";
import _DetailPaymentDonationFormModal from "./_DetailPaymentDonationFormModal";

const schema = yup.object({
  nominal: yup.number().required().min(10000).max(1000000000000000),
});

interface PropsType {
  onSubmit: (data: { nominal: number }) => void;
}

// Region: COMPONENT
const _DetailPaymentDonationForm = (props: PropsType) => {
  // * Button Group Nominal
  const handleClickNominalButton = (newValue: number) => {
    setValue("nominal", newValue);
  };

  // * React Hook Form
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { nominal: number }) => {
    // Pass data and event to parent component
    props.onSubmit(data);
    setIsOpen(true);
  };

  // Modal
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button Group Nominal */}
      <_DetailPaymentDonationFormButtonGroup
        handleClickItem={handleClickNominalButton}
      />

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        css={css`
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        `}
      >
        <Controller
          name="nominal"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              value={field.value || ""}
              onChange={field.onChange}
              error={!!errors.nominal}
              helperText={errors.nominal?.message || null}
              label={"Jumlah Donasi"}
              fullWidth
              type="number"
              inputMode="numeric"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Rp</InputAdornment>
                ),
              }}
            />
          )}
        />
        <Button fullWidth variant="contained" type="submit">
          Donasi Sekarang
        </Button>
        <_DetailPaymentDonationFormModal
          isOpen={isOpen}
          onButtonClose={() => setIsOpen(false)}
        />
      </form>
    </>
  );
};
export default _DetailPaymentDonationForm;
