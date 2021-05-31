/* There is some employee information that is needed for every country:

- Country of work
- First name
- Last name
- Date of birth
- Holiday allowance

There are three countries to handle for this task: Spain, Ghana and Brazil (these stats/figures are imaginary and for this exercise only)

Spain: 

- Extra fields:
    - Marital status
    - Social insurance number
- Minimum holiday allowance is 30 days

Ghana:

- Extra fields:
    - Marital status
    - Number of children
- No laws on holiday allowance

Brazil:

- Extra fields:
    - Working hours
- Maximum holiday allowance is 40 days */

const mocksData = {
  defaultFields: [
    {
      id: "firstName",
      label: "First name",
      type: "text"
    },
    {
      id: "lastName",
      label: "Last name",
      type: "text"
    },
    {
      id: "dateOfBirth",
      label: "Date of birth",
      type: "date"
    },
    {
      id: "holidayAllowance",
      label: "Holiday allowance",
      type: "text"
    }
  ],
  extraFields: {
    ES: [
      {
        id: "maritalStatus",
        label: "Marital status",
        type: "text"
      },
      {
        id: "socialInsuranceNumber",
        label: "Social insurance number",
        type: "text"
      }
    ],
    GH: [
      {
        id: "maritalStatus",
        label: "Marital status",
        type: "text"
      },
      {
        id: "numberOfChildren",
        label: "Number of children",
        type: "number"
      }
    ],
    BR: [
      {
        id: "workingHours",
        label: "Working hours",
        type: "number"
      }
    ]
  },
  holidayAllowanceRules: {
    ES: {
      min: 30,
      label: "Minimum holiday allowance is 30 days"
    },
    GH: {
      label: "No laws on holiday allowance"
    },
    BR: {
      max: 40,
      label: "Maximum holiday allowance is 40 days"
    }
  },
  countries: [
    {
      countryName: "Spain",
      countryCode: "ES"
    },
    {
      countryName: "Ghana",
      countryCode: "GH"
    },
    {
      countryName: "Brazil",
      countryCode: "BR"
    }
  ],
  terms: {
    countriesSelectorLabel: "Select a country"
  }
};

// const initialState = items.reduce((acc, current, index) => {
//   const accItem = {
//     ...current,
//     isSelected: false,
//     onSelecting: false
//   };
//   acc[index] = accItem;
//   return acc;
// }

const validationRulesType = {
  MIN_MAX: "MIN_MAX"
};

const formData = mocksData.countries.reduce((acc, current) => {
  const extendHolidayAllowance = mocksData.defaultFields.map((item) => {
    const rules =
      item.id === "holidayAllowance"
        ? {
            ...mocksData.holidayAllowanceRules[current.countryCode],
            type: validationRulesType.MIN_MAX
          }
        : undefined;
    return {
      ...item,
      validationRules: rules
    };
  });
  const fields = [
    ...extendHolidayAllowance,
    ...mocksData.extraFields[current.countryCode]
  ];

  acc[current.countryCode] = fields;
  return acc;
}, {});

export { mocksData, formData };
