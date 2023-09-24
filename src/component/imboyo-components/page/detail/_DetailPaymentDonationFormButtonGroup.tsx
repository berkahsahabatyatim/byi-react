/** @jsxImportSource @emotion/react */
"use client";

import { Button, Theme, useTheme } from "@mui/material";
import { numToCurrencyFormat } from "../../../../../utils/num-to-currency-format";
import { css } from "@emotion/react";
import { grey } from "@mui/material/colors";
import { useState } from "react";

interface PropsType {
  handleClickItem: (value: number) => void;
}

const buttonGroup = [10000, 50000, 100000, 200000];

// Region: COMPONENT
const _DetailPaymentDonationFormButtonGroup = (props: PropsType) => {
  const theme = useTheme();

  const [inputNominal, setInputNominal] = useState(0);

  const handleClickButton = (value: number) => {
    setInputNominal(value);
    props.handleClickItem(value);
  };

  return (
    <div css={styles.container}>
      {buttonGroup.map((_value, _index) => (
        <Button
          key={_index}
          fullWidth
          variant="outlined"
          onClick={() => handleClickButton(_value)}
          css={styles.button(theme, _value, inputNominal)}
        >
          {numToCurrencyFormat(_value)}
        </Button>
      ))}
    </div>
  );
};
export default _DetailPaymentDonationFormButtonGroup;

// Region: Styles
const styles = {
  container: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    width: 100%;
  `,

  button: (theme: Theme, buttonValue: number, stateValue: number) => css`
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;

    padding: 1rem 0;
    color: ${grey[800]} !important;

    // active state
    border: ${stateValue === buttonValue
      ? `1px solid ${theme.palette.primary.main}`
      : `1px solid ${grey[400]}`} !important;
  `,
};
