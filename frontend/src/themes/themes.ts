import { createTheme } from "@mui/material/styles";
import {
  blueGrey,
  blue,
  grey,
  red,
  green,
  pink,
  brown,
  indigo,
  lightBlue,
  cyan,
  deepOrange,
} from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    auth: {
      backgroundColor: string;
      boxShadow: string;
      icon: string;
    };
    status: {
      new: string;
      appointed: string;
      inProgress: string;
      paused: string;
      done: string;
    };
    sideBar: {
      border: string;
      backgroundColor: string;
      active: string;
      default: string;
      hover: string;
      text: string;
      shadow: string;
      textDefault: string;
    };
    header: {
      backgroundColor: string;
      iconColor: string;
      border: string;
      shadow: string;
    };
    layout: {
      backgroundColor: string;
    };
    scrollButton: {
      backgroundColor: string;
      hover: string;
    };
    footer: {
      backgroundColor: string;
      border: string;
    };
    colors: {
      contrast: string;
      alarm: string;
      stopped: string;
      working: string;
      icons: {
        addIcon: string;
        addVacancy: string;
        error: string;
        empty: string;
      };
      statuses: {
        worked: string;
        workedNight: string;
        ill: string;
        vacation: string;
        walk: string;
        vacancy: string;
        travel: string;
        weekend: string;
        unworked: string;
        donor: string;
      };
      equipmentStatuses: {
        worked: string;
        disconnected: string;
        null: string;
        off_area: string;
        repaired: string;
        traveled: string;
        unworked: string;
        rtk: string;
        port_off: string;
      };
      timeline: {
        admin: string;
        boss: string;
        chief: string;
        superuser: string;
        user: string;
      };
      logItem: {
        success: string;
        error: string;
      };
    };
    blocks: {
      backgroundColor: string;
      border: string;
      shadow: string;
      hoverShadow: string;
      darkenBg: string;
    };
    rtk: {
      rootBackGround: string;
      gradient: string;
      title: string;
      text: string;
      line: string;
      content: string;
      logo: string;
      logoShadow: string;
      th: string;
      shadow: string;
    };
    table: {
      th: {
        color?: string;
        backgroundColor?: string;
        checked: string;
      };
      total: {
        color: string;
        backgroundColor: string;
        hover: string;
        selected: string;
        selectedHover: string;
        checked: string;
        lines: string;
        shadow: string;
      };
      toolbar: {
        backgroundColor: string;
        color: string;
      };
    };
    tasks: {
      backgroundColor: string;
      task: {
        backgroundColor: string;
        shadow: string;
        hover: string;
        loader: string;
      };
    };
    calendar: {
      boxShadow: string;
      hover: string;
      option: {
        weekend: string;
        choosedCell: string;
        backgroundColor: string;
        shadow: string;
        hover: string;
        selected: string;
        selectedHover: string;
      };
      selectedColor: string;
    };
    form: {
      input: {
        focused: string;
        underline: string;
        fieldset: string;
        hoverFieldset: string;
        focusedFieldset: string;
      };
      checkbox: {
        color: string;
      };
      datePicker: {
        hover: string;
        selected: string;
        selectedHover: string;
      };
      select: {
        selected: string;
        selectedHover: string;
      };
    };
    grey: {
      50: string;
    };
    chip: {
      success: {
        color: string;
        backgroundColor: string;
      };
      error: {
        color: string;
        backgroundColor: string;
      };
      warning: {
        color: string;
        backgroundColor: string;
      };
      disabled: {
        color: string;
        backgroundColor: string;
      };
      autocomplete: {
        border: string;
        backgroundColor: string;
      };
      clock: {
        backgroundColor: string;
        color: string;
      };
      adjustment: {
        color: string;
        backgroundColor: string;
      };
      total: {
        color: string;
        backgroundColor: string;
      };
    };
    tab: {
      backgroundColor: string;
      color: string;
      selected: string;
    };
    text: {
      color: string;
      info: string;
    };
    rectangle: {
      success: string;
      error: string;
      border: string;
    };
    button: {
      backgroundColor: string;
      color: string;
      border: string;
    };
    priority: {
      low: string;
      medium: string;
      hight: string;
      white: string;
    };
    loader: {
      backgroundColor: string;
      color: string;
    };
    eto: {
      border: string;
      backgroundColor: string;
      boxShadow: string;
      success: string;
      error: string;
    };
    userModal: {
      box: {
        backgroundColor: string;
        shadow: string;
      };
      logWrapper: {
        backgroundColor: string;
      };
    };
    linear: { backgroundColor: string };
    modal: {
      box: {
        backgroundColor: string;
        shadow: string;
      };
      logWrapper: {
        backgroundColor: string;
      };
    };
    ui: {
      iconButton: {
        color: string;
        bg: string;
        border: string;
        hover: string;
      };
      text: {
        primary: string;
        secondary: string;
        info: string;
        label: string;
        softBlue: string;
        highlight: string;
        disabled: string;
        darken: string;
        lighten: string;
      };
      table: {
        th: {
          color: string;
          backgroundColor: string;
        };
        td: {
          color: string;
        };
        border: string;
        hover: string;
      };
    };
    protocol: {
      modbus: {
        backgroundColor: string;
        color: string;
      };
      focas: {
        backgroundColor: string;
        color: string;
      };
    };
  }

  interface ThemeOptions {
    auth?: {
      backgroundColor: string;
      boxShadow: string;
      icon: string;
    };
    status?: {
      new?: string;
      appointed?: string;
      inProgress?: string;
      paused?: string;
      done?: string;
    };
    sideBar?: {
      border?: string;
      backgroundColor?: string;
      active?: string;
      default?: string;
      hover?: string;
      text?: string;
      textDefault?: string;
      shadow?: string;
    };
    header?: {
      backgroundColor: string;
      iconColor: string;
      border: string;
      shadow: string;
    };
    layout?: {
      backgroundColor: string;
    };
    scrollButton?: {
      backgroundColor?: string;
      hover?: string;
    };
    footer?: {
      backgroundColor: string;
      border?: string;
    };
    colors?: {
      contrast: string;
      alarm: string;
      stopped: string;
      working: string;
      icons: {
        addIcon: string;
        addVacancy: string;
        error: string;
        empty: string;
      };
      statuses: {
        worked: string;
        workedNight: string;
        ill: string;
        vacation: string;
        walk: string;
        vacancy: string;
        travel: string;
        weekend: string;
        unworked: string;
        donor: string;
      };
      equipmentStatuses: {
        worked: string;
        disconnected: string;
        null: string;
        off_area: string;
        repaired: string;
        traveled: string;
        unworked: string;
        rtk: string;
        port_off: string;
      };
      timeline?: {
        admin: string;
        boss: string;
        chief: string;
        superuser: string;
        user: string;
      };
      logItem?: {
        success: string;
        error: string;
      };
    };
    blocks?: {
      backgroundColor: string;
      border?: string;
      shadow?: string;
      hoverShadow?: string;
      darkenBg?: string;
    };
    rtk?: {
      rootBackGround: string;
      gradient: string;
      shadow: string;
      title: string;
      text: string;
      line: string;
      content?: string;
      logo: string;
      logoShadow: string;
      th: string;
    };
    table?: {
      th?: {
        backgroundColor?: string;
        color?: string;
        checked: string;
      };
      total?: {
        color: string;
        backgroundColor: string;
        hover: string;
        selected: string;
        selectedHover: string;
        checked: string;
        lines: string;
        shadow: string;
      };
      toolbar?: {
        backgroundColor: string;
        color: string;
      };
    };
    tasks?: {
      backgroundColor: string;
      task?: {
        backgroundColor: string;
        shadow: string;
        hover: string;
        loader: string;
      };
    };
    calendar?: {
      boxShadow: string;
      hover: string;
      option: {
        weekend: string;
        choosedCell: string;
        backgroundColor: string;
        shadow: string;
        hover: string;
        selected: string;
        selectedHover: string;
      };
      selectedColor: string;
    };
    form?: {
      input: {
        focused: string;
        underline: string;
        fieldset: string;
        hoverFieldset: string;
        focusedFieldset: string;
      };
      checkbox: {
        color: string;
      };
      datePicker: {
        hover: string;
        selected: string;
        selectedHover: string;
      };
      select: {
        selected: string;
        selectedHover: string;
      };
    };
    grey?: {
      50?: string;
    };
    chip: {
      success?: {
        color: string;
        backgroundColor: string;
      };
      error?: {
        color?: string;
        backgroundColor?: string;
      };
      warning?: {
        color?: string;
        backgroundColor?: string;
      };
      disabled?: {
        color: string;
        backgroundColor?: string;
      };
      autocomplete?: {
        border: string;
        backgroundColor: string;
      };
      clock?: {
        backgroundColor: string;
        color: string;
      };
      adjustment?: {
        color: string;
        backgroundColor?: string;
      };
      total?: {
        color: string;
        backgroundColor: string;
      };
    };
    tab?: {
      backgroundColor: string;
      color: string;
      selected: string;
    };
    text?: {
      color: string;
      info: string;
    };
    rectangle?: {
      success: string;
      error: string;
      border: string;
    };
    button?: {
      backgroundColor: string;
      color: string;
      border: string;
    };
    priority?: {
      low: string;
      medium: string;
      hight: string;
      white: string;
    };
    loader?: {
      backgroundColor: string;
      color: string;
    };
    eto?: {
      border: string;
      backgroundColor: string;
      boxShadow: string;
      success: string;
      error: string;
    };
    userModal?: {
      box: {
        backgroundColor: string;
        shadow: string;
      };
      logWrapper: {
        backgroundColor: string;
      };
    };
    linear?: { backgroundColor: string };
    modal?: {
      box: {
        backgroundColor: string;
        shadow: string;
      };
      logWrapper: {
        backgroundColor: string;
      };
    };
    ui?: {
      iconButton: {
        color: string;
        bg: string;
        border: string;
        hover: string;
      };
      text: {
        primary: string;
        secondary: string;
        info: string;
        label: string;
        softBlue: string;
        highlight: string;
        disabled: string;
        darken: string;
        lighten: string;
      };
      table: {
        th: {
          color: string;
          backgroundColor: string;
        };
        td: {
          color: string;
        };
        border: string;
        hover: string;
      };
    };
    protocol?: {
      modbus?: {
        backgroundColor: string;
        color: string;
      };
      focas?: {
        backgroundColor: string;
        color: string;
      };
    };
  }
}

const lightTheme = createTheme({
  auth: {
    backgroundColor: "#ffffff",
    boxShadow:
      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    icon: grey[400],
  },
  status: {
    new: "#4caf50",
    appointed: "#1b5e20",
    inProgress: "blue",
    done: grey[700],
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: 12,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          disableRipple: true,
          fontSize: 14,
          textTransform: "unset",
          fontWeight: 500,
          borderRadius: "10px",
          "&$disabled": {
            color: "#666666",
            background: "inherit",
          },
        },
        text: {
          fontSize: 14,
          fontWeight: 500,
          textTransform: "unset",
        },
        contained: {
          fontWeight: 500,
          boxShadow: "none",
          color: "#ffffff",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#F8F9FE",
          "&$disabled": {
            WebkitTextFillColor: "#C7C7C7",
          },
        },
        input: {
          padding: "2px 4px",
          fontSize: 12,
          "::placeholder": {
            fontSize: 12,
            color: "#f6f8fc",
            padding: 0,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            paddingRight: "8px",
            borderRadius: "10px",
            fontSize: 13,
            backgroundColor: "#F8F9FE",
            "& fieldset": {},
            "&:hover fieldset": {},
            "&.Mui-focused fieldset": {},
            "& .MuiInputAdornment-root": {
              color: "#a0a8c0",
            },
            "& .MuiInputAdornment-positionEnd": {
              margin: 0,
              "& .MuiSvgIcon-root": {
                fontSize: 14,
                color: "#9098b0",

                "&:hover": {
                  color: "#000003bf",
                  cursor: "pointer",
                },
              },
            },
            "& .MuiOutlinedInput-input": {
              "&::-webkit-scrollbar": {
                width: 8,
                height: 8,
                borderRadius: 10,
                backgroundColor: "#f8f9fe",
              },
              "&::-webkit-scrollbar-track": {
                borderRadius: 10,
                backgroundColor: "#f8f9fe",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#6e8d86",
              },
            },
          },
          "& .MuiIconButton-root": {
            padding: 0,
            marginRight: 0,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "#a0a8c0",
          fontSize: 20,
        },
        root: {
          color: "#323750",
          fontSize: 12,
          borderRadius: "10px",
          padding: "0px 6px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#6a7391",
          fontSize: 13,
          "&.Mui-focused": {
            "&.Mui-error": {
              color: "#d32f2f",
            },
            color: "#9098b0",
            fontSize: 13,
          },
          "&.Mui-disabled": {
            color: "grey",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 11,
          color: "#6b7280",
          "&.Mui-error": {
            fontSize: 11,
            position: "absolute",
            bottom: "-18px",
          },
          "&.MuiFormHelperText-sizeMedium": {
            fontSize: 11,
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        popupIndicator: {
          color: "#a0a8c0",
          "& .MuiSvgIcon-root": {
            fontSize: 20,
          },
          "&:hover": {
            color: "#9098b0",
            cursor: "pointer",
          },
        },

        clearIndicator: {
          color: "#a0a8c0",
          "& .MuiSvgIcon-root": {
            fontSize: 20,
          },
          "&:hover": {
            color: "#9098b0",
            cursor: "pointer",
          },
        },

        paper: {
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0px 0px 4px -1px rgba(0, 0, 0, 0.26)",
          marginTop: "4px",
          minWidth: "150px",
          border: "1px solid #e0e0e0",
          padding: "2px",

          "& .MuiAutocomplete-listbox": {
            padding: "2px",
          },
        },

        option: {
          fontSize: "12px",
          color: "#374151",
          padding: "6px 12px",
          minHeight: "auto",
          borderRadius: "8px",

          "&:hover": {
            backgroundColor: "#F0F4FF",
          },

          '&[aria-selected="true"]': {
            backgroundColor: "#F0F4FF",
            color: "#4b7a4b",
            fontWeight: 500,

            "&:hover": {
              backgroundColor: "#F0F4FF",
            },
          },

          '&[aria-selected="true"].Mui-focused': {
            backgroundColor: "#F0F4FF",
          },

          "&.Mui-disabled": {
            color: "#000000",
            backgroundColor: "#ffffff",
            opacity: 0.6,
          },
        },

        noOptions: {
          fontSize: "12px",
          color: "#6b7280",
          padding: "12px 16px",
          textAlign: "center",
          fontStyle: "italic",
          backgroundColor: "#F8F9FE",
        },

        loading: {
          fontSize: "12px",
          color: "#6b7280",
          padding: "12px 16px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          fontSize: 10,
          backgroundColor: "#F8F9FE",

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#dde0eb",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#a0a8c0",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#7ba7c8",
            borderWidth: "1px",
          },

          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "#d32f2f",
          },

          "&.Mui-error": {
            "& fieldset": {
              borderColor: "#d32f2f",
            },
            "&:hover fieldset": {
              borderColor: "#d32f2f",
            },
            "&.Mui-focused ": {
              "& fieldset": {
                borderColor: "#d32f2f",
              },
              "& label": {
                color: "#d32f2f",
              },
            },
            "& label": {
              color: "#d32f2f",
            },
          },

          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e0e0e0",
          },
        },

        input: {
          padding: "8px 12px",
          fontSize: "12px",
          color: "#323750",

          "::placeholder": {
            color: "#9ca3af",
            opacity: 1,
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0px 0px 4px -1px rgba(0, 0, 0, 0.26)",
          marginTop: "4px",
          minWidth: "150px",
          border: "1px solid #dde0eb",
          padding: "2px",

          "& .MuiList-root": {
            padding: "2px",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: 12,
          color: "#374151",
          padding: "6px 12px",
          minHeight: "auto",
          borderRadius: "8px",

          "&:hover": {
            backgroundColor: "#F0F4FF",
          },

          "&.Mui-selected": {
            backgroundColor: "#F0F4FF",
            color: "#4b7a4b",
            fontWeight: 500,

            "&:hover": {
              backgroundColor: "#F0F4FF",
            },
          },

          "&.Mui-disabled": {
            color: "#000000",
            backgroundColor: "#ffffff",
            padding: "4px 16px",
          },

          "& .MuiSvgIcon-root, & svg": {
            color: "#374151",
            fontSize: 16,
            marginRight: "8px",
            flexShrink: 0,
            margin: 0,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#ffffff",
          backgroundImage: "none",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: "#ffffff",
          backgroundImage: "none",
        },
      },
    },
    MuiPopper: {
      styleOverrides: {
        root: {
          "& .MuiPickersDay-root": {
            ":hover": {
              backgroundColor: "#e0e0e0",
            },
            "&.MuiPickersDay-root.MuiButtonBase-root.Mui-selected": {
              backgroundColor: "#548c87",
            },
            "&.MuiPickersDay-root.MuiButtonBase-root.Mui-selected:hover": {
              backgroundColor: "#6db5ae",
            },
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
          "& .Mui-checked": {
            "& .MuiSvgIcon-root": {
              fill: "#7ba7c8",
            },
          },
          "& .MuiCheckbox-root": {
            padding: "4px 0",
          },
          "& .MuiSvgIcon-root": {
            fill: "#a0a8c0",
          },
        },
        label: {
          color: "#6a7391",
          fontWeight: 500,
          width: 100,
          fontSize: 13,
        },
      },
    },
  },
  typography: {
    fontSize: 14,
    h1: {
      fontSize: 32,
      fontWeight: 700,
    },
    h2: {
      fontSize: 22,
      fontWeight: 600,
    },
    h5: {
      fontSize: 20,
      fontWeight: 500,
    },
    h6: {
      fontSize: 14,
    },
    body1: {
      fontSize: 14,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: 12,
    },
    button: {
      fontSize: 14,
    },
  },
  palette: {
    mode: "light",
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#ffffff",
    },
    secondary: {
      main: grey[700],
    },
    background: {
      default: "rgb(243, 248, 253)",
      paper: "#ffffff",
    },
  },
  sideBar: {
    backgroundColor: "#F2F4FA",
    default: grey[700],
    active: "#E6EAF8",
    hover: "#558a55",
    text: "#4b7a4b",
    textDefault: "#6b7280",
    shadow: "0px 0px 4px -1px rgba(0, 0, 0, 0.26)",
    border: `#dde0eb`,
  },
  header: {
    backgroundColor: "#ffffff",
    iconColor: "#6c6e6f",
    border: "rgb(232, 234, 240)",
    shadow: "rgba(219, 38, 38, 0.07) 0px 1px 8px;",
  },
  layout: {
    backgroundColor: "#F4F6FC",
  },
  scrollButton: {
    backgroundColor: grey[500],
  },
  footer: {
    backgroundColor: "#ffffff",
    border: "rgb(232, 234, 240)",
  },
  colors: {
    contrast: "#000000",
    alarm: "#df828c",
    stopped: "#5b616f",
    working: "#448f94",
    icons: {
      addIcon: "#2e7d32",
      addVacancy: "#d81b60",
      error: "#f32c1e",
      empty: "rgb(0, 0, 0)",
    },
    statuses: {
      worked: "#359039",
      workedNight: "#10154f",
      ill: "#ed6c02",
      vacation: "#0298ea",
      walk: "#d32f2f",
      vacancy: pink[600],
      travel: brown[600],
      weekend: "#1976d2",
      unworked: "rgba(0,0,0,0.36)",
      donor: "#c14341",
    },
    equipmentStatuses: {
      worked: "#359039",
      disconnected: "#283593",
      null: "rgba(0,0,0,0.36)",
      off_area: "#ed6c02",
      repaired: "#455a64",
      traveled: "#1976d2",
      unworked: "#d32f2f",
      rtk: "#00838f",
      port_off: "#f4511e",
    },
    timeline: {
      admin: grey[900],
      boss: red[900],
      chief: green[900],
      superuser: indigo[900],
      user: blue[900],
    },
    logItem: {
      success: green[800],
      error: red[800],
    },
  },
  blocks: {
    backgroundColor: "#ffffff",
    border: "#eef0f8",
    shadow: "rgba(0, 0, 0, 0.04) 0px 2px 12px",
    hoverShadow: "0 6px 20px rgba(0,0,0,0.1)",
    darkenBg: "",
  },
  rtk: {
    rootBackGround: "#BABABA",
    gradient:
      "linear-gradient(45deg, rgb(186, 186, 186) 66%, rgb(231, 231, 231) 79%, rgb(255, 255, 255) 87%)",
    title: "#000000000",
    shadow:
      "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
    text: "#000000000",
    line: "#000000000",
    content: "inherit",
    logo: "#fffffffff",
    logoShadow: "11px -7px 15px -9px rgba(34, 60, 80, 0.28)",
    th: blueGrey[600],
  },
  table: {
    th: {
      backgroundColor: "#6e8d86",
      color: "#ffffff",
      checked: grey[50],
    },
    total: {
      color: "#6e8d86",
      backgroundColor: "#ffffff",
      hover: grey[50],
      selected: grey[300],
      selectedHover: grey[200],
      checked: grey["A700"],
      lines: grey[200],
      shadow: "0px 0px 4px -1px rgba(0, 0, 0, 0.26)",
    },
    toolbar: {
      backgroundColor: grey[100],
      color: "#ffffff",
    },
  },
  tasks: {
    backgroundColor: "#f9fafd",
    task: {
      backgroundColor: "#ffffff",
      shadow:
        "0px 0px 1px -2px rgba(0,0,0,0.2),0px 0px 1px -2px rgba(0,0,0,0.14),0px 2px 2px 0px rgba(0,0,0,0.12)",
      hover:
        "0px 0px 0px 0px rgba(0,0,0,0.2),0px 3px 9px 0px rgba(0,0,0,0.14),0px 2px 4px 0px rgba(0,0,0,0.12)",
      loader: "rgba(255, 255, 255, 0.5)",
    },
  },
  calendar: {
    boxShadow: "0 0px 6px 0px rgba(35, 57, 66, 0.21)",
    hover: "0 0px 8px 0px rgba(35, 57, 66, 0.4)",
    option: {
      weekend: deepOrange["A400"],
      choosedCell: grey[900],
      backgroundColor: "rgb(255, 255, 255)",
      shadow:
        "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
      hover: "#f5f5f5",
      selected: "#ececec",
      selectedHover: "#dfdfdf",
    },
    selectedColor: "rgb(66, 66, 66, 0.5)",
  },
  form: {
    input: {
      focused: "#548c87",
      underline: "#548c87",
      fieldset: "#3c635f",
      hoverFieldset: "#6db5ae",
      focusedFieldset: "#548c87",
    },
    checkbox: {
      color: "#3c635f",
    },
    datePicker: {
      hover: "#e0e0e0",
      selected: "#548c87",
      selectedHover: "#6db5ae",
    },
    select: {
      selected: "#548c8723",
      selectedHover: "#548c873b",
    },
  },
  grey: {
    50: grey[300],
  },
  chip: {
    success: {
      color: "#459F85",
      backgroundColor: "#DBF6E5",
    },
    error: {
      color: "#f44336",
      backgroundColor: "#FFE4DE",
    },
    warning: {
      color: "#ef6c00",
      backgroundColor: "#fff1D6",
    },
    disabled: {
      color: "#212121",
      backgroundColor: "#e7e6e6",
    },
    autocomplete: {
      backgroundColor: "rgb(227, 221, 210, .5)",
      border: "#344b57",
    },
    clock: {
      backgroundColor: "#548c87",
      color: "#ffffff",
    },
    adjustment: {
      color: "#1565c0",
      backgroundColor: "#cae8fdff",
    },
    total: {
      color: "#5A607A",
      backgroundColor: "#CDD5E0",
    },
  },
  tab: {
    backgroundColor: "",
    color: grey[800],
    selected: "#000000",
  },
  text: {
    color: "#344b57",
    info: "#8890b0",
  },
  rectangle: {
    success: "#66bb6a",
    error: "#ef5350",
    border: "#ffffff",
  },
  button: {
    backgroundColor: "#548c87",
    color: "#ffffff",
    border: "#dde0eb",
  },
  priority: {
    low: "#2e7d32",
    medium: "#ff9800",
    hight: "#ef5350",
    white: "#ffffff",
  },
  loader: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    color: grey[900],
  },
  eto: {
    border: "#dde0eb",
    backgroundColor: "#ffffff",
    boxShadow:
      "0px 2px 5px -8px rgba(0, 0, 0,0.2),0px 3px 10px 1px rgba(0, 0, 0,0.14),0px 2px 16px 1px rgba(0, 0, 0,0.12)",
    success: "#2e7d32",
    error: "#ef5350",
  },
  userModal: {
    box: {
      backgroundColor: "#f8f8f8",
      shadow: "0 0 8px 0 rgba(0,0,0,0.2)",
    },
    logWrapper: {
      backgroundColor: "#ffffff",
    },
  },
  linear: {
    backgroundColor: "#e5e2e2",
  },
  modal: {
    box: {
      backgroundColor: "#e5e5e5",
      shadow: "0 0 8px 0 rgba(0,0,0,0.2)",
    },
    logWrapper: {
      backgroundColor: "#ffffff",
    },
  },
  ui: {
    iconButton: {
      color: "#6b7280",
      bg: "#f5f6fa",
      border: "#e0e3ea",
      hover: "#dfe1eb",
    },
    text: {
      primary: "#323750",
      secondary: "#374151",
      info: "#a0a8c0",
      label: "#9098b0",
      softBlue: "#7ba7c8",
      highlight: "#F4F6FC",
      disabled: "",
      darken: "",
      lighten: "#F8F9FE",
    },
    table: {
      th: {
        color: "#9098b0",
        backgroundColor: "#f8f9fe",
      },
      td: {
        color: "#9098b0",
      },
      border: "#eef0f8",
      hover: "#f8f9fe",
    },
  },
  protocol: {
    modbus: {
      backgroundColor: "#eff4f8",
      color: "#7ba7c8",
    },
    focas: {
      backgroundColor: "#e7e8f5",
      color: "#7B81C8",
    },
  },
});

const darkTheme = createTheme({
  auth: {
    backgroundColor: "#282c40",
    boxShadow:
      "0px 3px 5px -1px #2a2d3e20,0px 5px 8px 0px #2a2d3e14,0px 1px 14px 0px #2a2d3e",
    icon: blueGrey["A100"],
  },
  status: {
    new: "#4caf50",
    appointed: "#2c9934",
    inProgress: lightBlue[200],
    done: grey["A400"],
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: 12,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          disableRipple: true,
          fontSize: 14,
          textTransform: "unset",
          fontWeight: 500,
          borderRadius: "10px",
          "&$disabled": {
            color: "#666666",
            background: "#E0E1E6",
          },
        },
        text: {
          fontSize: 14,
          fontWeight: 500,
          textTransform: "unset",
        },
        contained: {
          fontWeight: 500,
          boxShadow: "none",
          color: "#FFFFFF",
          backgroundColor: "#42a5f5",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#181A24",
          "&$disabled": {
            WebkitTextFillColor: "#C7C7C7",
          },
        },
        input: {
          padding: "2px 4px",
          fontSize: 12,
          "::placeholder": {
            fontSize: 12,
            color: "#f6f8fc",
            padding: 0,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            paddingRight: "8px",
            borderRadius: "10px",
            fontSize: 13,
            backgroundColor: "#181A24",

            "& fieldset": {},
            "&:hover fieldset": {},
            "&.Mui-focused fieldset": {},
            "& .MuiInputAdornment-root": {
              color: "#a0a8c0",
            },
            "& .MuiInputAdornment-positionEnd": {
              margin: 0,
              "& .MuiSvgIcon-root": {
                fontSize: 14,
                color: "#a0a8c0",

                "&:hover": {
                  color: "#9098b0",
                  cursor: "pointer",
                },
              },
            },
          },
          "& .MuiIconButton-root": {
            padding: 0,
            marginRight: 0,
          },
          "& .MuiOutlinedInput-input": {
            "&::-webkit-scrollbar": {
              width: 8,
              height: 8,
              borderRadius: 10,
              backgroundColor: "#181a24",
            },
            "&::-webkit-scrollbar-track": {
              borderRadius: 10,
              backgroundColor: "#181a24",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: blueGrey[50],
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "#a0a8c0",
          fontSize: 20,
        },
        root: {
          color: "#f6f8fc",
          fontSize: 12,
          borderRadius: "10px",
          padding: "0px 6px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#a0a8c0",
          fontSize: 13,
          "&.Mui-focused": {
            "&.Mui-error": {
              color: "#d74444",
            },
            color: "#7ba7c8",
            fontSize: 13,
          },
          "&.Mui-disabled": {
            color: "grey",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 11,
          color: "#6b7280",
          "&.Mui-error": {
            fontSize: 11,
            position: "absolute",
            bottom: "-18px",
          },
          "&.MuiFormHelperText-sizeMedium": {
            fontSize: 11,
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        popupIndicator: {
          color: "#a0a8c0",
          "& .MuiSvgIcon-root": {
            fontSize: 20,
          },
          "&:hover": {
            color: "#9098b0",
            cursor: "pointer",
          },
        },

        // Иконка очистки (крестик)
        clearIndicator: {
          color: "#a0a8c0",
          "& .MuiSvgIcon-root": {
            fontSize: 20,
          },
          "&:hover": {
            color: "#9098b0",
            cursor: "pointer",
          },
        },

        paper: {
          backgroundColor: "#13151E",
          borderRadius: "10px",
          boxShadow: "-1px 0px 15px 5px rgba(18, 20, 22, 0.9)",
          marginTop: "4px",
          minWidth: "150px",
          border: "1px solid #374151",
          padding: "2px",

          "& .MuiAutocomplete-listbox": {
            padding: "2px",
          },
        },

        option: {
          fontSize: "12px",
          color: "#c0c8e0",
          padding: "6px 12px",
          minHeight: "auto",
          borderRadius: "8px",

          "&:hover": {
            backgroundColor: "#303450",
            color: "#c8cce0",
          },

          '&[aria-selected="true"]': {
            backgroundColor: "#303450",
            color: "#a8c5a8",
            fontWeight: 500,

            "&:hover": {
              backgroundColor: "#303450",
            },
          },

          '&[aria-selected="true"].Mui-focused': {
            backgroundColor: "#181A24",
          },

          "&.Mui-disabled": {
            color: "#ffffff",
            backgroundColor: "#2F3138",
            opacity: 0.6,
          },
        },

        noOptions: {
          fontSize: "12px",
          color: "#ffffff",
          padding: "12px 16px",
          textAlign: "center",
          fontStyle: "italic",
          justifyContent: "center",
          // opacity: 0.38,
          backgroundColor: "#35373E",
        },

        loading: {
          fontSize: "12px",
          color: "#6b7280",
          padding: "12px 16px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          fontSize: 10,
          backgroundColor: "#181A24",

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2a2d3e",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#3a3d52",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#7ba7c8",
            borderWidth: "1px",
          },

          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "#d74444",
          },

          "&.Mui-error": {
            "& fieldset": {
              borderColor: "#d74444",
            },
            "&:hover fieldset": {
              borderColor: "#d74444",
            },
            "&.Mui-focused": {
              "& fieldset": {
                borderColor: "#d74444",
              },
            },
            "& legend ": {
              color: "#d74444",
            },
          },

          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: "#3a3d52",
          },
        },

        input: {
          padding: "8px 12px",
          fontSize: 12,
          color: "#f6f8fc",

          "::placeholder": {
            color: "#9ca3af",
            opacity: 1,
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1F2129",
          borderRadius: "10px",
          boxShadow: "-1px 0px 15px 5px rgba(18, 20, 22, 0.9)",
          marginTop: "4px",
          minWidth: "150px",
          border: "1px solid #374151",
          overlay: "none",
          backgroundImage: "none",

          "& .MuiList-root": {
            padding: "4px",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: 12,
          color: "#c0c8e0",
          padding: "6px 12px",
          minHeight: "auto",
          borderRadius: "8px",

          "&:hover": {
            backgroundColor: "#2a2d3e",
            color: "#c8cce0",
          },

          "&.Mui-selected": {
            backgroundColor: "#303450",
            color: "#a8c5a8",
            fontWeight: 500,

            "&:hover": {
              backgroundColor: "#303450",
            },
          },

          "&.Mui-disabled": {
            color: "#ffffff",
            backgroundColor: "#35373E",
            padding: "4px 16px",
          },

          "& .MuiSvgIcon-root, & svg": {
            color: "#c0c8e0",
            fontSize: 16,
            marginRight: "8px",
            flexShrink: 0,
            margin: 0,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1E2130",
          backgroundImage: "none",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1E2130",
          backgroundImage: "none",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
          "& .Mui-checked": {
            "& .MuiSvgIcon-root": {
              fill: "#7ba7c8",
            },
          },
          "& .MuiCheckbox-root": {
            padding: "4px 0",
          },
          "& .MuiSvgIcon-root": {
            fill: "#a0a8c0",
          },
        },
        label: {
          color: "#a0a8c0",
          fontWeight: 500,
          width: 100,
          fontSize: 13,
        },
      },
    },
    MuiPopper: {
      styleOverrides: {
        root: {
          "& .MuiPickersDay-root": {
            ":hover": {
              backgroundColor: blueGrey[400],
            },
            "&.MuiPickersDay-root.MuiButtonBase-root.Mui-selected": {
              backgroundColor: blueGrey["A200"],
            },
            "&.MuiPickersDay-root.MuiButtonBase-root.Mui-selected:hover": {
              backgroundColor: blueGrey[500],
            },
          },
        },
      },
    },
  },
  typography: {
    fontSize: 14,
    h1: {
      fontSize: 32,
      fontWeight: 700,
    },
    h2: {
      fontSize: 22,
      fontWeight: 600,
    },
    h5: {
      fontSize: 20,
      fontWeight: 500,
    },
    h6: {
      fontSize: 14,
    },
    body1: {
      fontSize: 14,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: 12,
    },
    button: {
      fontSize: 14,
    },
  },
  palette: {
    mode: "dark",
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    primary: {
      main: "#90caf9",
      light: "#e3f2fd",
      dark: "#42a5f5",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    // secondary: {
    //   main: blue[400],
    // },
    secondary: {
      light: "#e8f2fc",
      main: "#dcecfc",
      dark: "#a4ccf4",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#ffffff",
    },
  },
  header: {
    backgroundColor: "#181A24",
    iconColor: blueGrey[100],
    border: "#2e3040",
    shadow: "rgba(0, 0, 0, 0.4) 0px 1px 8px;",
  },
  layout: {
    backgroundColor: "#13151E",
  },
  sideBar: {
    backgroundColor: "#181A24",
    default: "#c8cce0",
    active: "#303450",
    hover: "#89b189",
    text: "#a8c5a8",
    textDefault: "#9098b8",
    shadow: "-1px 0px 15px -5px rgba(18, 20, 22, 0.9);",
    border: "#2a2d3e",
  },
  scrollButton: {
    backgroundColor: blueGrey[800],
  },
  footer: {
    backgroundColor: "#181A24",
    border: "#2e3040",
  },
  colors: {
    contrast: "#ffffff",
    alarm: red[400],
    stopped: blueGrey[300],
    working: green[600],
    icons: {
      addIcon: "#45b14a",
      addVacancy: "#ec407a",
      error: "#ffffff",
      empty: "rgb(0, 0, 0)",
    },
    statuses: {
      worked: "#3e9f42",
      workedNight: "#305471",
      ill: "#ed6c02",
      vacation: "#1593fc",
      walk: "#d74343",
      vacancy: "#ec407a",
      travel: "#7b5d54",
      weekend: "#2776c5",
      unworked: "rgba(255,255,255,0.52)",
      donor: "#C75654",
    },
    equipmentStatuses: {
      worked: "#3e9f42",
      disconnected: "#c5cae9",
      null: "rgba(255,255,255,0.52)",
      off_area: "#ed6c02",
      repaired: "#cfd8dc",
      traveled: "#2f83d6",
      unworked: "#d74343",
      rtk: "#00acc1",
      port_off: "#f4511e",
    },
    timeline: {
      admin: grey[200],
      boss: red[600],
      chief: green[500],
      superuser: cyan[500],
      user: blue[500],
    },
    logItem: {
      success: green[400],
      error: red[400],
    },
  },
  blocks: {
    backgroundColor: "#1e2130",
    border: "#2a2d3e",
    shadow: "-1px 0px 10px 3px rgba(18, 20, 22, 0.9);",
    hoverShadow: "0 6px 20px rgba(0, 0, 0)",
    darkenBg: "#181A24",
  },
  rtk: {
    rootBackGround: "#2D333A",
    gradient:
      "linear-gradient(45deg, rgb(45, 51, 58) 65%, rgb(67, 75, 84) 77%, rgb(77, 86, 96) 81%)",
    shadow: "0px 1px 30px 6px rgba(255, 255, 255, 0.17)",
    title: "#ffffff",
    text: "#90caf9",
    line: "#6d8ba5",
    content: "inherit",
    logo: "#4D5660",
    logoShadow: "6px -8px 14px -9px rgba(255, 255, 255, 0.63)",
    th: blueGrey[900],
  },
  table: {
    th: {
      backgroundColor: "#232529",
      color: "#42a5f5",
      checked: "#42a5f5",
    },
    total: {
      color: blueGrey[50],
      backgroundColor: "#1e2130",
      hover: blueGrey["A700"],
      selected: blueGrey[700],
      selectedHover: blueGrey[600],
      checked: blueGrey[100],
      lines: blueGrey[800],
      shadow: "0px 0px 8px 0px rgba(255, 255, 255, 0.17)",
    },
    toolbar: {
      backgroundColor: blueGrey[900],
      color: "#42a5f5",
    },
  },
  tasks: {
    backgroundColor: "#181a26",
    task: {
      backgroundColor:
        // blueGrey[900],
        "#1e2130",
      shadow:
        "0px 0px 1px -2px rgba(255,255,255,0.2),0px 0px 1px -2px rgba(255,255,255,0.14),0px 2px 2px 0px rgba(255,255,255,0.12)",
      hover:
        "0px 0px 0px 0px rgba(255,255,255,0.2),0px 3px 9px 0px rgba(255,255,255,0.14),0px 2px 4px 0px rgba(255,255,255,0.12)",
      loader: "rgba(93,93,93, 0.5)",
    },
  },
  calendar: {
    boxShadow: "0 0px 6px 0px rgba(211,215,217, 0.21)",
    hover: "0 0px 8px 0px rgba(211,215,217, 0.4)",
    option: {
      weekend: deepOrange["A400"],
      choosedCell: blueGrey[100],
      backgroundColor: "rgb(18, 18, 18)",
      shadow:
        "0px 5px 5px -3px rgba(255,255,255,0.2),0px 8px 10px 1px rgba(255,255,255,0.14),0px 3px 14px 2px rgba(255,255,255,0.12)",
      hover: "#3e3e3e",
      selected: "rgb(207,216,220, 0.12)",
      selectedHover: "#4e5051",
    },
    selectedColor: "rgb(61, 145, 255, 0.5)",
  },
  form: {
    input: {
      focused: blueGrey[200],
      underline: blueGrey[300],
      fieldset: blueGrey[200],
      hoverFieldset: blueGrey[300],
      focusedFieldset: blueGrey[200],
    },
    checkbox: {
      color: blueGrey["A100"],
    },
    datePicker: {
      hover: blueGrey[400],
      selected: blueGrey["A200"],
      selectedHover: blueGrey[500],
    },
    select: {
      selected: "rgb(207,216,220, 0.12)",
      selectedHover: "rgb(207,216,220, 0.2)",
    },
  },
  grey: {
    50: blueGrey[700],
  },
  chip: {
    success: {
      color: "#75E884",
      backgroundColor: "#404b40",
    },
    error: {
      color: "#ff6868",
      backgroundColor: "#5d3838",
    },
    warning: {
      color: "#EFC55A",
      backgroundColor: "#635123",
    },
    disabled: {
      color: "#ffffff",
      backgroundColor: "#494747",
    },
    autocomplete: {
      backgroundColor: blueGrey[700],
      border: blueGrey[500],
    },
    clock: {
      backgroundColor: "#4d9cea",
      color: "#000000",
    },
    adjustment: {
      color: "#90caf9",
      backgroundColor: "#2e4155",
    },
    total: {
      color: "#C0D1E6",
      backgroundColor: "#3A4455",
    },
  },
  tab: {
    backgroundColor: "",
    color: blueGrey[100],
    selected: "#ffffff",
    // "#42a5f5",
  },
  text: {
    color: "#FFFFFF",
    info: "#8890b0",
  },
  rectangle: {
    success: "#388E3C",
    error: "#F44336",
    border: "#21262B",
  },
  button: {
    backgroundColor: blueGrey[100],
    color: grey[900],
    border: "#2a2d3e",
  },
  priority: {
    low: "#45b14a",
    medium: "#ffb74d",
    hight: "#f55a4e",
    white: "#000000",
  },
  loader: {
    backgroundColor: "rgb(33, 33, 33, 0.5)",
    color: "#ffffff",
  },
  eto: {
    border: "#2a2d3e",
    backgroundColor: "#313940",
    boxShadow:
      "0px 2px 5px -8px rgba(255, 255, 255,0.2),0px 3px 10px 1px rgba(255, 255, 255,0.14),0px 2px 16px 1px rgba(255, 255, 255,0.12)",
    success: "#45b14a",
    error: "#f55a4e",
  },
  userModal: {
    box: {
      backgroundColor: "#272a3d",
      shadow: "0 0 8px 0 rgba(255,255,255,0.2)",
    },
    logWrapper: {
      backgroundColor: "#1e2130",
    },
  },
  linear: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modal: {
    box: {
      backgroundColor: "#272727",
      shadow: "0 0 8px 0 rgba(255,255,255,0.2)",
    },
    logWrapper: {
      backgroundColor: "#272727",
    },
  },
  ui: {
    iconButton: {
      color: "#a0a8c0",
      bg: "#252836",
      border: "#3a3d50",
      hover: "#3a3f52",
    },
    text: {
      primary: "#e0e3f0",
      secondary: "#c0c8e0",
      info: "#6872a0",
      label: "#8890b0",
      softBlue: "#7ba7c8",
      highlight: "#252836",
      disabled: "",
      darken: "",
      lighten: "#181A24",
    },
    table: {
      th: {
        color: "#6872a0",
        backgroundColor: "#181a24",
      },
      td: {
        color: "#6872a0",
      },
      border: "#252836",
      hover: "#252836",
    },
  },
  protocol: {
    modbus: {
      backgroundColor: "#7ba7c820",
      color: "#7ba7c8",
    },
    focas: {
      backgroundColor: "#7B81C820",
      color: "#7B81C8",
    },
  },
});

export { lightTheme, darkTheme };
