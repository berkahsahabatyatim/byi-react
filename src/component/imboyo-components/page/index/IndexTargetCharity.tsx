/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Card, useTheme } from "@mui/material";
import _IndexTargetCharityItem from "./_IndexTargetCharityItem";
import theme from "../../../theme-registry/theme";

const IndexTargetCharity = () => {
  const theme = useTheme();

  return (
    <section css={styles.section}>
      <Button
        variant="contained"
        color="error"
        fullWidth
        css={css({
          textTransform: "none",
          backgroundColor: theme.palette.primaryRed.main,
        })}
      >
        Daftar Pejuang Yatim
      </Button>

      <div css={styles.inquiry.wrapper}>
        <h3 css={styles.inquiry.moneyText}>Rp. 150.000.000</h3>
        <p css={styles.inquiry.descriptionText}>
          Jumlah Perolehan dalam Rupiah
        </p>
      </div>

      <Card css={styles.card.wrapper}>
        <_IndexTargetCharityItem
          href="#wakaf"
          label="Wakaf"
          image="/Donasi/assets/assets/images/menu_donation.png"
        />
        <_IndexTargetCharityItem
          href="#zakat"
          label="Wakaf"
          image="/Donasi/assets/assets/images/menu_qurban.png"
        />
        <_IndexTargetCharityItem
          href="#qurban"
          label="Wakaf"
          image="/Donasi/assets/assets/images/menu_zakat.png"
        />
      </Card>
    </section>
  );
};

// Region: Styles
const styles = {
  section: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: "1rem",
  }),

  inquiry: {
    wrapper: css({
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
      textAlign: "center",
    }),

    moneyText: css({
      color: theme.palette.primaryRed.main,
      fontSize: "2rem",
      fontWeight: "bold",
      margin: 0,
    }),
    descriptionText: css({
      margin: 0,
    }),
  },

  card: {
    wrapper: css({
      width: "100%",
      padding: "1rem 1rem",
      display: "grid",

      // Grid with 2 Columns and the rows is auto following total items
      gridTemplateColumns: "repeat(3, 1fr)",
      gridAutoRows: "auto",

      alignItems: "center",
      justifyContent: "space-between",
      gap: "1rem",

      [theme.breakpoints.up("sm")]: {
        padding: "1rem 4rem",
      },
    }),
  },
};
export default IndexTargetCharity;
