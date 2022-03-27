import { gql } from "@apollo/client";

export const GET_DATEFORMULAS = gql`
  query GetDateFormulas {
    date_calculation_dateformula {
      dateId
      dateName
      adjustmentDay
      adjustmentMonth
      adjustmentYear
    }
  }
`