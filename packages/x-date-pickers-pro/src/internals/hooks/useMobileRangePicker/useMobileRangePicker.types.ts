import { SlotComponentPropsFromProps } from '@mui/x-internals/types';
import { PickerFieldSlotProps, PickerOwnerState } from '@mui/x-date-pickers/models';
import {
  PickersModalDialogSlots,
  PickersModalDialogSlotProps,
  UsePickerProps,
  DateOrTimeViewWithMeridiem,
  PickerRangeValue,
  PickerFieldUISlotsFromContext,
  PickerFieldUISlotPropsFromContext,
} from '@mui/x-date-pickers/internals';
import {
  ExportedPickersLayoutSlotProps,
  ExportedPickersLayoutSlots,
  PickersLayoutSlotProps,
} from '@mui/x-date-pickers/PickersLayout';
import {
  NonStaticRangePickerProps,
  NonStaticRangePickerHookParameters,
  UseRangePickerProps,
} from '../../models';

export interface UseMobileRangePickerSlots
  extends PickersModalDialogSlots,
    ExportedPickersLayoutSlots<PickerRangeValue>,
    PickerFieldUISlotsFromContext {
  /**
   * Component used to enter the date with the keyboard.
   */
  field: React.ElementType;
}

export interface ExportedUseMobileRangePickerSlotProps<
  TEnableAccessibleFieldDOMStructure extends boolean,
> extends PickersModalDialogSlotProps,
    ExportedPickersLayoutSlotProps<PickerRangeValue>,
    PickerFieldUISlotPropsFromContext {
  field?: SlotComponentPropsFromProps<
    PickerFieldSlotProps<PickerRangeValue, TEnableAccessibleFieldDOMStructure> & {
      dateSeparator?: string;
    },
    {},
    PickerOwnerState
  >;
}

export interface UseMobileRangePickerSlotProps<TEnableAccessibleFieldDOMStructure extends boolean>
  extends ExportedUseMobileRangePickerSlotProps<TEnableAccessibleFieldDOMStructure>,
    Pick<PickersLayoutSlotProps<PickerRangeValue>, 'toolbar'> {}

export interface MobileRangeOnlyPickerProps extends NonStaticRangePickerProps {}

export interface UseMobileRangePickerProps<
  TView extends DateOrTimeViewWithMeridiem,
  TEnableAccessibleFieldDOMStructure extends boolean,
  TError,
  TExternalProps extends UsePickerProps<PickerRangeValue, TView, TError, any>,
> extends UseRangePickerProps<TView, TError, TExternalProps> {
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: UseMobileRangePickerSlots;
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps?: UseMobileRangePickerSlotProps<TEnableAccessibleFieldDOMStructure>;
}

export interface UseMobileRangePickerParams<
  TView extends DateOrTimeViewWithMeridiem,
  TEnableAccessibleFieldDOMStructure extends boolean,
  TExternalProps extends UseMobileRangePickerProps<
    TView,
    TEnableAccessibleFieldDOMStructure,
    any,
    TExternalProps
  >,
> extends NonStaticRangePickerHookParameters<TView, TExternalProps> {}
