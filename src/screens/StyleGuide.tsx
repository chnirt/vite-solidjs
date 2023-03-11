import classNames from "classnames";
import { MdDelete } from "react-icons/md";
import { HiPlus } from "react-icons/hi";

const StyleGuide = () => {
  return (
    <div className="p-2">
      StyleGuide
      <div className="flex flex-col">
        Typography
        <span className="font-roboto font-normal text-[3.563rem] leading-[4rem]">
          Display Large - Roboto 57/64 . 0
        </span>
        <span className="font-roboto font-normal text-[2.813rem] leading-[3.25rem]">
          Display Medium - Roboto 45/52 . 0
        </span>
        <span className="font-roboto font-normal text-[2.25rem] leading-[2.75rem]">
          Display Small - Roboto 36/44 . 0
        </span>
        <span className="font-roboto font-normal text-[2rem] leading-[2.5rem]">
          Headline Large - Roboto 32/40 . 0
        </span>
        <span className="font-roboto font-normal text-[1.75rem] leading-[2.25rem]">
          Headline Medium - Roboto 28/36 . 0
        </span>
        <span className="font-roboto font-normal text-[1.5rem] leading-[2rem]">
          Headline Small - Roboto 24/32 . 0
        </span>
        <span className="font-roboto font-normal text-[1.375rem] leading-[1.75rem]">
          Title Large - Roboto Regular 22/28 . 0
        </span>
        <span className="font-roboto font-medium text-[1rem] leading-[1.5rem] tracking-[0.009375rem]">
          Title Medium - Roboto Medium 16/24 . +0.15
        </span>
        <span className="font-roboto font-medium text-[0.875rem] leading-[1.25rem] tracking-[0.00625rem]">
          Title Small - Roboto Medium 14/20 . +0.1
        </span>
        <span className="font-roboto font-medium text-[0.875rem] leading-[1.25rem] tracking-[0.00625rem]">
          Label Large - Roboto Medium 14/20 . +0.1
        </span>
        <span className="font-roboto font-medium text-[0.75rem] leading-[1rem] tracking-[0.03125rem]">
          Label Large - Roboto Medium 12/16 . +0.5
        </span>
        <span className="font-roboto font-medium text-[0.6875rem] leading-[1rem] tracking-[0.03125rem]">
          Label Small - Roboto Medium 11/16 . +0.5
        </span>
        <span className="font-roboto font-normal text-[1rem] leading-[1.5rem] tracking-[0.03125rem]">
          Body Large - Roboto 16/24 . +0.5
        </span>
        <span className="font-roboto font-normal text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem]">
          Body Medium - Roboto 14/20 . +0.25
        </span>
        <span className="font-roboto font-normal text-[0.75rem] leading-[1rem] tracking-[0.025rem]">
          Body Small - Roboto 12/16 . +0.4
        </span>
      </div>
      <div className="flex flex-col">
        Color Guide
        <div className="flex flex-row">
          {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100].map((item) => (
            <div
              key={`color-primary-${item}`}
              className={classNames("flex justify-center w-20 h-20", {
                "bg-primary-0 text-white": item == 0,
                "bg-primary-10 text-white": item == 10,
                "bg-primary-20 text-white": item == 20,
                "bg-primary-30 text-white": item == 30,
                "bg-primary-40 text-white": item == 40,
                "bg-primary-50 text-white": item == 50,
                "bg-primary-60": item == 60,
                "bg-primary-70": item == 70,
                "bg-primary-80": item == 80,
                "bg-primary-90": item == 90,
                "bg-primary-95": item == 95,
                "bg-primary-99": item == 99,
                "bg-primary-100": item == 100,
              })}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-row">
          {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100].map((item) => (
            <div
              key={`color-secondary-${item}`}
              className={classNames("flex justify-center w-20 h-20", {
                "bg-secondary-0 text-white": item == 0,
                "bg-secondary-10 text-white": item == 10,
                "bg-secondary-20 text-white": item == 20,
                "bg-secondary-30 text-white": item == 30,
                "bg-secondary-40 text-white": item == 40,
                "bg-secondary-50 text-white": item == 50,
                "bg-secondary-60": item == 60,
                "bg-secondary-70": item == 70,
                "bg-secondary-80": item == 80,
                "bg-secondary-90": item == 90,
                "bg-secondary-95": item == 95,
                "bg-secondary-99": item == 99,
                "bg-secondary-100": item == 100,
              })}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-row">
          {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100].map((item) => (
            <div
              key={`color-tertiary-${item}`}
              className={classNames("flex justify-center w-20 h-20", {
                "bg-tertiary-0 text-white": item == 0,
                "bg-tertiary-10 text-white": item == 10,
                "bg-tertiary-20 text-white": item == 20,
                "bg-tertiary-30 text-white": item == 30,
                "bg-tertiary-40 text-white": item == 40,
                "bg-tertiary-50 text-white": item == 50,
                "bg-tertiary-60": item == 60,
                "bg-tertiary-70": item == 70,
                "bg-tertiary-80": item == 80,
                "bg-tertiary-90": item == 90,
                "bg-tertiary-95": item == 95,
                "bg-tertiary-99": item == 99,
                "bg-tertiary-100": item == 100,
              })}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-row">
          {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100].map((item) => (
            <div
              key={`color-error-${item}`}
              className={classNames("flex justify-center w-20 h-20", {
                "bg-error-0 text-white": item == 0,
                "bg-error-10 text-white": item == 10,
                "bg-error-20 text-white": item == 20,
                "bg-error-30 text-white": item == 30,
                "bg-error-40 text-white": item == 40,
                "bg-error-50 text-white": item == 50,
                "bg-error-60": item == 60,
                "bg-error-70": item == 70,
                "bg-error-80": item == 80,
                "bg-error-90": item == 90,
                "bg-error-95": item == 95,
                "bg-error-99": item == 99,
                "bg-error-100": item == 100,
              })}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-row">
          {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100].map((item) => (
            <div
              key={`color-neutral-${item}`}
              className={classNames("flex justify-center w-20 h-20", {
                "bg-neutral-0 text-white": item == 0,
                "bg-neutral-10 text-white": item == 10,
                "bg-neutral-20 text-white": item == 20,
                "bg-neutral-30 text-white": item == 30,
                "bg-neutral-40 text-white": item == 40,
                "bg-neutral-50 text-white": item == 50,
                "bg-neutral-60": item == 60,
                "bg-neutral-70": item == 70,
                "bg-neutral-80": item == 80,
                "bg-neutral-90": item == 90,
                "bg-neutral-95": item == 95,
                "bg-neutral-99": item == 99,
                "bg-neutral-100": item == 100,
              })}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-row">
          {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100].map((item) => (
            <div
              key={`color-neutralVariant-${item}`}
              className={classNames("flex justify-center w-20 h-20", {
                "bg-neutralVariant-0 text-white": item == 0,
                "bg-neutralVariant-10 text-white": item == 10,
                "bg-neutralVariant-20 text-white": item == 20,
                "bg-neutralVariant-30 text-white": item == 30,
                "bg-neutralVariant-40 text-white": item == 40,
                "bg-neutralVariant-50 text-white": item == 50,
                "bg-neutralVariant-60": item == 60,
                "bg-neutralVariant-70": item == 70,
                "bg-neutralVariant-80": item == 80,
                "bg-neutralVariant-90": item == 90,
                "bg-neutralVariant-95": item == 95,
                "bg-neutralVariant-99": item == 99,
                "bg-neutralVariant-100": item == 100,
              })}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        Elevation
        <div className="flex flex-row">
          {[0, 1, 2, 3, 4].map((item) => (
            <div
              key={`elevation-${item}`}
              className={classNames(
                "first:ml-0 ml-4",
                "w-[12.5rem] h-[12.5rem] rounded-[1rem] bg-[#FFFBFE]",
                {
                  "shadow-0": item === 0,
                  "shadow-1": item === 1,
                  "shadow-2": item === 2,
                  "shadow-3": item === 3,
                  "shadow-4": item === 4,
                }
              )}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        Layout Breakpoint
        <div className="border h-20 extraLarge:bg-primary-10 large:bg-primary-30 medium:bg-primary-50 small:bg-primary-70" />
      </div>
      <div className="flex flex-col">
        Badges
        <div className="flex flex-row">
          {[undefined, 3, 32, 123, 9999].map((item) =>
            typeof item === "number" ? (
              <div
                key={`badge-${item}`}
                className="first:ml-0 ml-4 min-w-[1rem] h-[1rem] rounded-[0.5rem] flex justify-center items-center px-1 bg-error-40 text-white"
              >
                <span className="font-roboto font-medium text-[0.6875rem] leading-[1rem] tracking-[0.03125rem]">
                  {item}
                </span>
              </div>
            ) : (
              <div
                key={`badge-${item}`}
                className="first:ml-0 ml-4 w-[0.375rem] h-[0.375rem] rounded-[0.1875rem] bg-error-40"
              />
            )
          )}
        </div>
      </div>
      <div className="flex flex-col">
        Buttons
        <div className="flex flex-row">
          {[
            {
              label: "Filled",
            },
            {
              label: "Disabled Filled",
              disabled: true,
            },
            {
              label: "Start Icon Filled",
              startIcon: <HiPlus />,
            },
            {
              label: "End Icon Filled",
              endIcon: <MdDelete />,
            },
            {
              label: "Disabled Start Icon Filled",
              startIcon: <HiPlus />,
              disabled: true,
            },
            {
              label: "End Icon Filled",
              endIcon: <MdDelete />,
              disabled: true,
            },
          ].map((item) => (
            <button
              type="button"
              key={`button-${item}`}
              className={classNames(
                "first:ml-0 ml-4",
                "bg-primary-40 flex justify-center items-center rounded-[6.25rem] px-6 py-[0.625rem]",
                {
                  "hover:opacity-80": !item?.disabled,
                  "focus:opacity-80": !item?.disabled,
                  "active:opacity-80": !item?.disabled,
                  "disabled:bg-neutral-10/[.12] text-neutral-10/[0.38]":
                    item?.disabled,
                }
              )}
              disabled={item?.disabled}
            >
              {item?.startIcon && (
                <div
                  className={classNames("text-white mr-2", {
                    "text-neutral-10/[0.38]": item?.disabled,
                  })}
                >
                  {item?.startIcon}
                </div>
              )}
              {item?.label && (
                <span
                  className={classNames(
                    "font-roboto font-medium text-[0.875rem] leading-[1.25rem] tracking-[0.00625rem] text-white",
                    {
                      "text-neutral-10/[0.38]": item?.disabled,
                    }
                  )}
                >
                  {item?.label}
                </span>
              )}
              {item?.endIcon && (
                <div
                  className={classNames("text-white ml-2", {
                    "text-neutral-10/[0.38]": item?.disabled,
                  })}
                >
                  {item?.endIcon}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
